import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { AppState } from "../../../store";
import * as L from "../../../store/login"

// 테스트 페이지 메인(구매 목록 리스트 화면과 레시피를 코인으로 구매하는 경우 모달 구현)

export default function TestPage({ navigation }:any, props:any) {

    const [userId, setUserId] = useState('');

    const log = useSelector<AppState, L.State>((state) => state.login)
    const {loggedIn, loggedUser} = log

    useEffect(() => {
        const getLoginData = async () => {
            setUserId(loggedUser.memberId);
        }

        getLoginData();
    }, []);

    return (
        <View style={{padding: 20}}>

            {/* 구매 이력 조회 버튼 */}
            <Pressable 
                style={{margin: 10, 
                    padding: 10, 
                    backgroundColor: '#05f', 
                    alignItems: 'center', 
                    borderRadius: 10
                }}
                onPress={() => {
                    console.log(userId);
                    navigation.navigate('userPurchaseList', {"loginId": userId});
                }}
            >
                <Text style={{color: '#fff', fontWeight: '700'}}>구매이력 조회</Text>
            </Pressable>

            {/* 레시피 구매 버튼 */}
            <Pressable 
                style={{margin: 10, 
                    padding: 10, 
                    backgroundColor: '#4f2599', 
                    alignItems: 'center', 
                    borderRadius: 10
                }}
                onPress={() => navigation.navigate('purchaseRecipe')}
            >
                <Text style={{color: '#fff', fontWeight: '700'}}>레시피 구매</Text>
            </Pressable>

            {/* <Pressable 
                style={{margin: 10, padding: 10, backgroundColor: '#f27533', alignItems: 'center', borderRadius: 10}}
            >
                <Text style={{color: '#fff', fontWeight: '700'}}>기타</Text>
            </Pressable> */}

        </View>
    )
}