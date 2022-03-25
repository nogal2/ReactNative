import React, { useCallback } from "react";
import {  StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {useSelector, useDispatch} from "react-redux"
import { AppState } from "../store";
import * as C from '../store/counter'
import { NavigationHeader } from "../theme";

// prettier-ignore
export default function Counter() {

    const counter = useSelector<AppState, C.State>(state => state.counter)
    const dispatch = useDispatch()
    const increaseCounter = useCallback(() => {
        dispatch(C.increaseAction())
    }, [])
    const decreaseCounter = useCallback(() => {
        dispatch(C.decreaseAction())
    }, [])

    return(
        <View style={{flex:1}}>
            <NavigationHeader title='Counter'/>
            <View>
                <Icon name="plus" size={30} onPress={increaseCounter} />
                <Icon name="minus" size={30} onPress={decreaseCounter} />
            </View>
            <View style={[styles.textView]}>
                <Text style={[styles.text]}>Counter: {counter}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flex: {flex:1},
    textView: {alignItems: 'center', justifyContent: 'center'},
    text:{fontSize: 30}
})