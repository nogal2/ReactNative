import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { LayoutChangeEvent, Platform, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native-paper";

const title = 'LifeCycle'

export default function LifeCycle() {
    useEffect(() => {
        console.log(Platform.OS, 'useEffect called')    // 4
        return () => console.log(Platform.OS, 'useEffect finished') //  다른 화면으로 넘기면 언마운트 되면서 리턴됨 7
    }, [])

    useLayoutEffect(() => {
        console.log(Platform.OS, 'useLayoutEffect called')  // 3
        return() => console.log(Platform.OS, 'useLayoutEffect finished')    //  다른 화면으로 넘기면 언마운트 되면서 리턴됨 6
    }, [])

    const onLayout = useCallback((e:LayoutChangeEvent) => {
        const {layout} = e.nativeEvent
        console.log(Platform.OS, 'onLayout called', layout) // 5
    }, [])

    console.log(Platform.OS, 'render start')    // 1
    
    return (
        <View  onLayout={onLayout} style={styles.view}>
            {console.log('return') /* 2 */}
            <Text style={styles.text}>LifeCycle</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    view: {flex:1, alignItems: 'center', backgroundColor: Colors.blue100},
    text: {fontSize: 20, fontWeight: '600'}
})