import React, {useCallback, useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image, Alert, LogBox} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../consts/colors';
import {PrimaryButton} from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../store';
import * as L from '../store/login';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import {getProfile} from '../mypage/utils';
import config from '../project.config';
import * as U from '../mypage/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loggedUserkey} from '../store/login';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'Possible Unhandled Promise Rejection',
]);

const OnBoardScreen = () => {
  const navigation = useNavigation();
  const [memberId, setMemberId] = useState('');
  const [memberNickname, setMemberNickname] = useState<string | null>('');
  const [password, setPassword] = useState('');

  const log = useSelector<AppState, L.State>(state => state.login);
  const {loggedIn, loggedUser} = log;
  const dispatch = useDispatch();

  useEffect(() => {
    GoogleSignin.configure();
    console.log(`GoogleSignin.configure(): ${GoogleSignin.configure()}`);
  }, []);

  useEffect(() => {
    // 처음 시작할때 로그인 체크.
    isSignedIn();
    kakao();
    AsyncStorage.getItem(loggedUserkey).then(value => {
      if (value != null && value.length > 0) {
        const userInfo = JSON.parse(value);
        dispatch(
          L.loginAction({
            memberId: userInfo.memberId,
            memberNickname: userInfo.memberNickname,
            memberEmail: userInfo.memberEmail,
            memberPhone: userInfo.memberPhone,
            memberName: userInfo.memberName,
            memberCoin: userInfo.memberCoin,
            memberGender: userInfo.memberGender,
            memberGrade: userInfo.memberGrade,
            memberMainAddr: userInfo.memberMainAddr,
            memberDetailAddr: userInfo.memberDetailAddr,
            memberZipcode: userInfo.memberZipcode,
            memberThumbnail: userInfo.memberThumbnail,
            idSeq: 3,
          }),
        );
        loggedIn
          ? navigation.navigate('HomeScreen')
          : console.log(`OnBoardScreen loggedIn: ${loggedIn}`);
      }
    });
  }, [loggedIn]);

  const isSignedIn = useCallback(async () => {
    // 구글로그인 되어있는지 체크. 되어있으면 로그인하기.
    const isSignedIn = await GoogleSignin.isSignedIn();
    console.log('isSignedIn: ' + isSignedIn);
    if (isSignedIn) {
      googleSignIn();
    }
  }, []);

  const googleSignIn = async () => {
    // 구글 로그인하기.
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('onBoardScreen GoogleLogin: ' + userInfo);
    axios
      .post(config.address + 'regist', null, {
        params: {
          memberId: userInfo.user.id,
          memberNickname: userInfo.user.name,
        },
      })
      .then(response => {
        console.log('로그인 되었습니다.');
        setPassword('');
        dispatch(
          L.loginAction({
            memberId: response.data.memberId,
            memberNickname: response.data.memberNickname,
            memberEmail: response.data.memberEmail,
            memberPhone: response.data.memberPhone,
            memberName: response.data.memberName,
            memberCoin: response.data.memberCoin,
            memberGender: response.data.memberGender,
            memberGrade: response.data.memberGrade,
            memberMainAddr: response.data.memberMainAddr,
            memberDetailAddr: response.data.memberDetailAddr,
            memberZipcode: response.data.Zipcode,
            memberThumbnail: userInfo.user.photo,
            idSeq: 2,
          }),
        );
        loggedIn
          ? navigation.navigate('HomeScreen')
          : console.log(`OnBoardScreen loggedIn: ${loggedIn}`);
      })
      .catch((err: Error) => {});
  };

  const kakao = async () => {
    // 카카오 로그인 체크후 로그인 되었으면 로그인 하기.
    getProfile()
      .then(value => {
        const userInfo = value.split(' ');
        console.log('onBoardScreen kakaoLogin: ' + userInfo);
        if (userInfo.length > 0) {
          axios
            .post(config.address + 'regist', null, {
              params: {
                memberId: userInfo[0],
                memberNickname: userInfo[1],
                memberEmail: userInfo[2],
                memberGender: userInfo[3],
              },
            })
            .then(response => {
              console.log('로그인 되었습니다.');
              setPassword('');
              setMemberId(userInfo[0]);
              setMemberNickname(userInfo[1]);
              dispatch(
                L.loginAction({
                  memberId: response.data.memberId,
                  memberNickname: response.data.memberNickname,
                  memberEmail: response.data.memberEmail,
                  memberPhone: response.data.memberPhone,
                  memberName: response.data.memberName,
                  memberCoin: response.data.memberCoin,
                  memberGender: response.data.memberGender,
                  memberGrade: response.data.memberGrade,
                  memberMainAddr: response.data.memberMainAddr,
                  memberDetailAddr: response.data.memberDetailAddr,
                  memberZipcode: response.data.memberZipcode,
                  memberThumbnail: userInfo[4],
                  idSeq: 1,
                }),
              );
              loggedIn
                ? navigation.navigate('HomeScreen')
                : console.log(`OnBoardScreen loggedIn: ${loggedIn}`);
            })
            .catch(err => {});
        }
      })
      .catch(err => {});
  };

  const userLogin = () => {
    // 일반 로그인
    console.log('userLogin');
    console.log(`memberId: ${memberId}`);
    if (password == '') {
      return Alert.alert('비밀번호를 입력해주세요.');
    }

    axios
      .post(config.address + 'login', null, {
        params: {
          memberId: memberId,
          memberPwd: password,
        },
      })
      .then(response => {
        if (response.data.memberId == memberId) {
          console.log('로그인 되었습니다.');
          AsyncStorage.getItem('thumbnail').then(value => {
            console.log('thumbnail: ' + value);
            dispatch(
              L.signUpAction({
                memberId: response.data.memberId,
                memberNickname: response.data.memberNickname,
                memberEmail: response.data.memberEmail,
                memberPhone: response.data.memberPhone,
                memberName: response.data.memberName,
                memberCoin: response.data.memberCoin,
                memberGender: response.data.memberGender,
                memberGrade: response.data.memberGrade,
                memberMainAddr: response.data.memberMainAddr,
                memberDetailAddr: response.data.memberDetailAddr,
                memberZipcode: response.data.memberZipcode,
                memberThumbnail: value,
                idSeq: 3,
              }),
            );
            loggedIn
              ? navigation.navigate('HomeScreen')
              : console.log(`OnBoardScreen loggedIn: ${loggedIn}`);
          });
        }
      })
      .catch((err: Error) => console.log(err.message));
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{height: 400}}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
            top: -150,
          }}
          source={require('../assets/onboardImage.png')}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
            레시피를 부탁해
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            음식에 관한 모든것을 공유합니다.
          </Text>
        </View>
        <View style={style.indicatorContainer}>
          <View style={style.currentIndicator} />
          <View style={style.indicator} />
          <View style={style.indicator} />
        </View>
        <PrimaryButton
          onPress={() => navigation.navigate('HomeScreen')}
          title="시작하기"
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
});

export default OnBoardScreen; //여기에 시작하는 인트로 부분에 화면단 생성
