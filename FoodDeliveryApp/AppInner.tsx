import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useSelector} from 'react-redux';
import useSocket from './src/hooks/useSocket';
import Delivery from './src/pages/Delivery';
import Orders from './src/pages/Orders';
import Settings from './src/pages/Settings';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import userSlice from './src/slices/user';
import {RootState} from './src/store/reducer';
import {useAppDispatch} from './src/store';
import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';
import {Alert} from 'react-native';
import orderSlice from './src/slices/order';
import usePermissions from './src/hooks/usePermissions';

export type LoggedInParamList = {
  Orders: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppInner() {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  console.log('isLoggedIn', isLoggedIn);
  const dispatch = useAppDispatch();
  const [socket, disconnect] = useSocket();
  // 키=값
  // 'userInfo', {name:'zerocho', birth: 1994}
  // 'order', {orderId: '1312s', price: 9000, latitude: 37.5, longitude: 127.5}
  // 앱 실행 시 토큰 있으면 로그인하는 코드

  usePermissions();

  useEffect(() => {
    axios.interceptors.response.use(
      response => {
        // 성공했을때,
        console.log(response);
        return response;
      },
      async error => {
        // 실패했을때(토근만료됐을때와 그 외)
        const {
          config, // 예전 요청
          response: {status},
        } = error; // error.reponse.status
        if (status === 419) {
          if (error.response.data.code === 'expired') {
            const originalRequest = config;
            const refreshToken = await EncryptedStorage.getItem('refreshToken');
            // token refresh 요청
            const {data} = await axios.post(
              `${Config.API_URL}/refreshToken`,
              {},
              {
                headers: {
                  authorization: `Bearer ${refreshToken}`,
                },
              },
            );
            // 새로운 토큰 저장
            dispatch(userSlice.actions.setAccessToken(data.data.accessToken));
            originalRequest.headers.authorization = `Bearer ${data.data.accessToken}`;
            return axios(originalRequest); // 예전 요청 다시 보냄.
          }
        }
        return Promise.reject(error);
      },
    );
  }, []);

  useEffect(() => {
    const getTokenAndRefresh = async () => {
      try {
        const token = await EncryptedStorage.getItem('refreshToken');
        if (!token) {
          return;
        }
        const response = await axios.post(
          `${Config.API_URL}/refreshToken`,
          {},
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        );
        dispatch(
          userSlice.actions.setUser({
            name: response.data.data.name,
            email: response.data.data.email,
            accessToken: response.data.data.accessToken,
          }),
        );
      } catch (error) {
        console.error(error);
        if ((error as AxiosError).response?.data.code === 'expired') {
          Alert.alert('알림', '다시 로그인 해주세요.');
        }
      } finally {
        // TODO: 스플래시 끄기
      }
    };
    getTokenAndRefresh();
  }, [dispatch]);

  useEffect(() => {
    const Callback = (data: any) => {
      console.log(data);
      dispatch(orderSlice.actions.addOrder(data));
    };
    if (socket && isLoggedIn) {
      socket.emit('acceptOrder', 'hello'); // 서버한테 데이터를 보냄
      socket.on('order', Callback); // 서버한테 데이터를 받음
    }
    return () => {
      if (socket) {
        socket.off('hello', Callback); // 받는거 그만하기
      }
    };
  }, [isLoggedIn, socket]);

  useEffect(() => {
    if (!isLoggedIn) {
      console.log('!isLoggedIn', !isLoggedIn);
      disconnect();
    }
  }, [dispatch, isLoggedIn, disconnect]);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Orders"
            component={Orders}
            options={{title: '오더 목록'}}
          />

          <Tab.Screen
            name="Delivery"
            component={Delivery}
            options={{headerShown: false}}
          />

          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{title: '내 정보'}}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{title: '로그인'}}
          />

          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{title: '회원가입'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppInner;
