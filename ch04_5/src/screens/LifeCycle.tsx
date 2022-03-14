import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { LayoutChangeEvent, Platform, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native-paper";
import { useLayout } from "../hooks";

const title = 'LifeCycle'

export default function LifeCycle() {
    const [layout, setLayout] = useLayout()
    
    return (
        <View  onLayout={setLayout} style={styles.view}>
            <Text style={styles.text}>LifeCycle</Text>
            <Text>layout: {JSON.stringify(layout, null, 2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    view: {flex:1, alignItems: 'center', backgroundColor: Colors.blue100},
    text: {fontSize: 20, fontWeight: '600'}
})