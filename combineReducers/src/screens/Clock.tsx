import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useInterval } from "../hooks/useInterval";
import { AppState } from "../store";
import * as C from '../store/clock'
import { NavigationHeader } from "../theme";

export default function Clock() {

    const {currentDate, currentTime} = useSelector<AppState, C.State>(({clock}) => clock)
    const dispatch = useDispatch()
    useInterval(() => {
        dispatch(C.setTimeAction(new Date))
    }, 1000)
    return(
        <View style={[styles.flex]}>
        <NavigationHeader title='Clock'/>
            <View style={[styles.flex, styles.textView]}>
                <Text style={[styles.text]}>{currentTime}</Text>
                <Text style={[styles.text]}>{currentDate}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flex: {flex: 1},
    textView: {alignItems: 'center', justifyContent:'center'},
    text: {fontSize:30}
})