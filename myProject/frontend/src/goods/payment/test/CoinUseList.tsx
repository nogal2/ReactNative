import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import config from "../../../project.config"
import { AppState } from "../../../store";
import * as L from "../../../store/login"

const Item = ({docsSeq, coinCount, coinInOut, coinDate}:any) => {

    // 숫자 자리수 구분
    const divideNum = (num:number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <ScrollView>
            <View style={styles.itemContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    { coinInOut === '사용'
                        ? <Text style={styles.coinOut}>{coinInOut}</Text>
                        : <Text style={styles.coinIn}>{coinInOut}</Text>
                    }
                    
                    <Text style={styles.coinCount}>{divideNum(coinCount)} 코인</Text>
                </View>
                <Text>{docsSeq}</Text>
                <Text>{coinDate}</Text>
            </View>
        </ScrollView>
    )
}

export default function CoinUseList() {

    const [coinData, setCoinData] = useState([]);
    const log = useSelector<AppState, L.State>((state) => state.login)
    const {loggedIn, loggedUser} = log
    useEffect(() => {
        const getCoinData = () => {
            axios.post(config.address +"coin/getUserCoinData", null, { params: {
                memberId: loggedUser.memberId
            }})
            .then((res) => {
                console.log(res.data);
                setCoinData(res.data);
            })
            .catch((err) => console.log(err));
        }
    
        getCoinData();
    }, []);

    const renderItem = ({item}:any) => {
        return (
            <Item
                memberId={loggedUser.memberId}
                coinCount={item.coinCount}
                coinInOut={item.coinInOut}
                docsSeq={item.docsSeq}      // 해당 레시피 이름
                coinDate={item.coinDate}
            />
        )
    }

    return (
        <View style={{height: 750}}>
            <Text style={styles.titleText}>코인 충전 및 사용 이력</Text>
            <FlatList data={coinData} renderItem={renderItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    },  // 각 아이템 리스트별 스타일
    coinCount: {
        fontSize: 20,
        fontWeight: '700'
    },  // 몇코인인지 나타내주는 텍스트
    coinOut: {
        fontSize: 17,
        fontWeight: '600',
        color: '#f00'
    },
    coinIn: {
        fontSize: 17,
        fontWeight: '600',
        color: '#00f'
    },
    titleText: {
        fontSize: 25,
        padding: 10,
        fontWeight: '600'
    },  // 페이지 제목
})