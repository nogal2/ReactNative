import React, { useCallback, useEffect, useState } from "react";
import {  ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {useSelector, useDispatch} from "react-redux"
import { AppState } from "../store";
import * as C from '../store/counter'
import { NavigationHeader } from "../theme";

// prettier-ignore
export default function Fetch() {

   const [humorText, setHumorText] = useState<string>('')
   const [errorMessage, setErrorMessage] = useState<string>('')
   const [loading, setLoading] = useState<boolean>(false)

   const getHumor = useCallback(() => {
       setHumorText('')
       setErrorMessage('')
       setLoading(true)
       fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((result) => {
            setHumorText(result.value)
            setLoading(false)
        })
        .catch((e) => {
            setErrorMessage(e.message)
            setLoading(false)
        })
   }, [])

   useEffect(getHumor, [])

    return(
        <View style={{flex:1}}>
            <NavigationHeader title='Fetch'/>
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