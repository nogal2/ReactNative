import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native-paper";

const title = 'Timer'

export default function Timer() {
    const [loading, setLoading] = useState(true)
    console.log(loading)
    const toggleLoading = useCallback(() => setLoading((loading) => !loading), [])  // loading true 면 false 로 false 면 true로
    useEffect(() => {
        const id = setTimeout(() => setLoading(false), 3000)
        console.log('useEffect')
        return () => {
            console.log('useEffect return' + id)
            clearTimeout(id)}
    }, [loading])
    
    return (
        <View style={styles.view}>
            <Text style={styles.title}>Timer</Text>
            <Text>loading: {loading.toString()}</Text>
            <Button onPress={toggleLoading} title={loading ? 'stop loading' : 'start loading'} />
            {loading && (<ActivityIndicator size='large' color={Colors.deepPurple700} /> )}
        </View>
    )
}

const styles = StyleSheet.create ({
    view: {flex:1, alignItems:'center', backgroundColor: Colors.yellow300},
    title: {fontSize: 30, fontWeight:'600'}
})