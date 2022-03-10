import React, { useMemo } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native-paper";
import { fibonacci } from "./fibonacci";
import * as D from '../data'

const title = 'Fibo'

export default function Fibo() {
    const memoizedFibonacci = useMemo(() => fibonacci, [])
    //console.log(`메모 ${memoizedFibonacci(3)}`)
    // console.log(fibonacci)
    const fibos = useMemo(
        () => 
        D.makeArray(20+1).map((notUsed, index) => ({
            number: index,
            fibonacci: memoizedFibonacci(index)
        })), []) 
    console.log(`fibos ${fibos}`)
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{title}</Text>
            <FlatList
                contentContainerStyle={[styles.contentContainerStyle]}
                data={fibos}
                renderItem={({item}) => (
                    <Text style={styles.text}>
                        {item.number} : {item.fibonacci}
                    </Text>
                )}
                keyExtractor = { (item) => item.number.toString() } />
        </View>
    )
}

const styles = StyleSheet.create ({
    view: {flex:1, padding:5, backgroundColor: Colors.blue900},
    text: {fontSize: 20, color: 'white'},
    contentContainerStyle: {alignItems: 'center'}
})