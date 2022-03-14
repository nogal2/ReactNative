import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native-paper";
import { useTimeout, useToggle } from "../hooks";

const title = 'Timer'

export default function Timer() {
    const [loading, toggleLoading] = useToggle(true)
    console.log(loading)
    useTimeout(() => loading && toggleLoading(), 3000, [loading])
    console.log(`useTimeout ${loading}`)
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