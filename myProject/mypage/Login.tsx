import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { NavigationHeader } from "../theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getProfile, signOutWithKakao } from "./utils";
import { KakaoOAuthToken, login } from "@react-native-seoul/kakao-login";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import * as L from '../store/login'
import * as U from './utils'
import { loginAction } from "../store/login";
import config from "../project.config"

export default function Login() {
    const navigation = useNavigation()
    const drawerOpen = useCallback(() => {navigation.dispatch(DrawerActions.openDrawer())}, [])
    console.log("Login")

    // 로그인 훅
    // 카카오 아이디
    const [memberId, setMemberId] = useState<string>('')
    const [memberNickname, setMemberNickname] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    const log = useSelector<AppState, L.State>((state) => state.login)
    const {loggedIn, loggedUser} = log
    const dispatch = useDispatch()
    console.log("loggedIn: "+ loggedIn + " loggedUser: " + loggedUser)
   /*  if(loggedIn) {
        navigation.navigate("MyPage")
    } */
    let userInfo:string[]
    //카카오 아이디 가져오기
    const signInWithKakao = async (): Promise<void> => {
        const token: KakaoOAuthToken = await login();

        userInfo= (await getProfile()).split(" ")
        console.log("userInfo: " + userInfo[0])
        
        axios.post(config.address + "regist", null, 
        {
            params: {
                memberId: userInfo[0],
                memberNickname: userInfo[1],
            }
        }).then(function(response) {
            if(response.data == "yes") {
                console.log("로그인 및 회원가입 되었습니다.")
            } else {
                console.log("로그인 되었습니다.")
            }
        }).catch((err:Error) => console.log(err.message))
        dispatch(L.loginAction({ memberId: userInfo[0], 
                                 memberNickname: userInfo[1] }))
        //navigation.navigate("MyPage")
    };
  
    const kakao = useCallback(() => {
            getProfile().then(value => {
                userInfo = value.split(" ")
                if(userInfo.length > 0){
                    dispatch(loginAction({ memberId: userInfo[0],
                                           memberNickname: userInfo[1]}))
                    //navigation.navigate("MyPage")
                }
            })
    }, [memberId, memberNickname])

    useEffect(() => {
        kakao()
    }, [])
    
    
    // 로그인
    const userLogin = () => {
        axios.post(config.address + "login", null, 
        {
            params: {
                memberId: memberId,
                memberPwd: password
        }
        }).then(function(response) {
            console.log(`memberId: ${response.data.memberId} memberNickname: ${response.data.memberNickname}`)
            if(response.data.memberId == memberId) {
                console.log("로그인 되었습니다.")
                dispatch(L.loginAction({ memberId: response.data.memberId, memberNickname: response.data.memberNickname }))
                console.log("디스패치아래")
                //navigation.navigate("MyPage")
                console.log('로그인 아래')
            } 
        }).catch((err:Error) => console.log(err.message))
    }

    const goMyfavoritePage = () => {
        navigation.navigate('MyFavoriteRecipe')
    }
    

    // useEffect(() => {
    //     U.readFromStorage(L.loggedUserkey)
    //         .then((value) => {
    //             if(value.length > 0) {
    //                 const savedUser = JSON.parse(value)
    //                 setMemberId(savedUser.memberId)
    //                 setPassword(savedUser.password)
    //                 setMemberNickname(savedUser.memberNickname)
    //             }
    //         })
    //         .catch((e) => {})
    // }, [loggedIn])

    if(!loggedIn){  // 로그아웃 상태일 때
        return(
            <SafeAreaView style={styles.container}>
                <View style={[styles.topBar]}>
                    <NavigationHeader title="홈" viewStyle={{}}
                    Left= {() => <Icon name="text-account" size={30} onPress={drawerOpen} />}
                    Right= {() => <Icon name="cart-heart" size={30} />}
                    />
                </View>

                <View style={[styles.contentView]}>
                    {/* 아이디 입력 */}
                    <View style={[styles.contentBox]}>
                        <View style={[styles.content]}>
                            <TextInput
                                placeholder="id를 입력해 주세요"
                                placeholderTextColor='#003f5c'
                                onChangeText = {(memberId) => setMemberId(memberId)} />
                        </View>

                        {/* 패스워드 입력 */}
                        <View style={[styles.content]}>
                            <TextInput
                                placeholder="패스워드를 입력해 주세요"
                                placeholderTextColor='#003f5c'
                                secureTextEntry={true}
                                onChangeText = {(password) => setPassword(password)} />
                        </View>

                        {/* 로그인 버튼 */}
                        <View style={[styles.loginBox]}>
                            <TouchableOpacity style={[styles.loginBtn]} onPress={() => userLogin()}>
                                <Text>로그인</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => signInWithKakao()}>
                                <Image source={require("./utils/kakao_login_medium_narrow.png")} />
                            </TouchableOpacity>
                        </View>
                        
                        {/* 회원가입 버튼 */}
                        <View style={[styles.loginBox]}>
                            <TouchableOpacity style={[styles.loginBtn]} onPress={() => navigation.navigate('MyAccount')}>
                                <Text>회원가입</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    } else {    // 로그인 상태일 때
        return(
            <SafeAreaView style={[styles.container]}>
                <View style={[styles.topBar]}> 
                    <NavigationHeader title="홈" 
                    Left= {() => <Icon name="text-account" size={30} onPress={drawerOpen} />}
                    Right= {() => <Icon name="cart-heart" size={30} />} />
                </View>
                <View style={[styles.contentView]}>
                    <Text>마이페이지</Text>
                    <View style={[styles.contentBox]}>
                        <View >
                            <TouchableOpacity style={[styles.content]} onPress={() => {
                                signOutWithKakao()
                                dispatch(L.logoutAction())
                                console.log(loggedIn)
                                navigation.navigate("Login")
                            }}>
                                <Text>로그아웃</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity style={[styles.content]} onPress={() => navigation.navigate('MyFavoriteRecipe')}>
                                    <Text>즐겨찾기</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity style={[styles.content]} onPress={() => navigation.navigate('MyInfo')}>
                                    <Text>내 정보</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity style={[styles.content]} onPress={() => navigation.navigate('MyUploadedRecipe')}>
                                    <Text>내가 쓴 레시피</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity style={[styles.content]} onPress={() => navigation.navigate('RecipeUpload')}>
                                    <Text>레시피 업로드</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topBar: {
        flex:1,
        borderWidth: 0.5,
        borderRadius:1
    },
    contentView: {
        flex:17,
        justifyContent:'center',
        alignItems:'center'
    },
    contentBox: {
        justifyContent:'center',
        alignItems:'center'
    },
    content: {
        borderWidth:1,
        borderRadius:10,
        width:200,
        marginTop: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    loginBox: {
        borderWidth:1,
        borderRadius:10,
        width:100,
        marginTop: 10,
        marginBottom:10
    },
    loginBtn: {
        alignItems:'center',
        justifyContent:'center', 
        marginBottom:5,
        marginTop:5
    }
    
}) 