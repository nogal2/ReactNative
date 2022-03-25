import React, { useCallback, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useInterval } from "../hooks/useInterval";
import { AppState } from "../store";
import * as C from '../store/clock'
import { NavigationHeader } from "../theme";
import * as H from '../store/humor'
import { Colors } from "react-native-paper";

export default function ThunkFetch() {

    const {humorText, errorMessage, loading} = useSelector<AppState, H.State>(
        ({humor}) => humor
    )
    const dispatch = useDispatch()

    const getHumor = useCallback(() => {
        dispatch(H.requestHumor())
    }, [])
    useEffect(getHumor, [])
   
    return(
        <View style={{flex:1}}>
            <NavigationHeader title='ThunkFetch'/>
            <View style={styles.textView}>
                <Text style={styles.text} onPress={getHumor}>
                    get humor
                </Text>
            </View>
            {loading && (
            <ActivityIndicator size="large" color={Colors.lightBlue500} />
            )}
            <View style={styles.textView}>
                <Text style={styles.text}>{humorText}</Text>
                {errorMessage.length > 0 && (
                    <Text style={styles.text}>{errorMessage}</Text>
                )}
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    flex: {flex:1},
    textView: {alignItems: 'center', justifyContent: 'center'},
    text:{fontSize: 20, textAlign:'center'}
})