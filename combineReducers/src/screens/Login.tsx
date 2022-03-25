import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { StyleSheet, Text, TextInput, Touchable, TouchableHighlight, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationHeader } from "../theme";
import * as D from '../data'
import { useDispatch } from "react-redux";
import * as L from '../store/login'

export default function Login() {
    console.log('login')
    const [email, setEmail] = useState<string>(D.randomEmail())
    const [name, setName] = useState<string>(D.randomName())
    const [password, setPassword] = useState<string>(D.random(10000, 1000000).toString())
    
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const goHomeNavigator = useCallback(() => {
        dispatch(L.loginAction({email, name, password}))
        navigation.navigate('TabNavigator')
    }, [email, name, password])
    // loginAction 생성기가 반환한 값을 dispatch 함수로 리듀서 쪽에 넘겨줌.
    const open = useCallback(() => {navigation.dispatch(DrawerActions.openDrawer())}, [])
    
    const goSignUp = useCallback(() => navigation.navigate('SignUp'), [])
    const goHome = useCallback(() => navigation.navigate('Home'), [])
    const goBack = useCallback(() => navigation.canGoBack() && navigation.goBack(), []) // 실행안됨.
    console.log('login2')
    return(
        <View style={{flex:1, alignItems:'center', backgroundColor:Colors.amber200}}>
            <NavigationHeader viewStyle={{backgroundColor:'white'}} 
                Left= {() => (<Icon name="menu" size={50} onPress={open}/>)}
                Right={() => (<Icon name="home-circle" size={50} onPress={goHome}/>)} title="로그인" />
            <Text>Login</Text>
            <TextInput style={[styles.textInput]}
                value={email} onChangeText={setEmail} placeholder="이메일 입력" />
            <TextInput style={[styles.textInput]} secureTextEntry
                value={password} onChangeText={setPassword} placeholder="비밀번호 입력" />
            <TouchableOpacity style={{height:30, width:100, margin:50}} onPress={goHomeNavigator} containerStyle={{backgroundColor:Colors.blue300}}>
                <Text>로그인</Text>    
            </TouchableOpacity> 
            <TouchableOpacity style={{height:30, width:100, margin:50}} onPress={goSignUp} containerStyle={{backgroundColor:Colors.blue300}}>
                <Text>회원가입</Text>    
            </TouchableOpacity> 
        </View>
    )
}

const styles = StyleSheet.create ({
    textInput: {
        width: 150,
        height: 30,
        borderWidth: 2,
        borderColor: Colors.green400,
        borderRadius: 1
    }
})