import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { Colors, useTheme } from "react-native-paper";
import { useToggleTheme } from "../contexts";


export default function Home() {
    const {dark, colors, fonts} = useTheme()
    // useTheme이 없었다면 App 에서 매개변수로 속성을 넘겨줘야만 한다.
    const toggleTheme = useToggleTheme()

    return (
        <View style={[styles.view, {backgroundColor:colors.background}]}>
            <View style={[styles.bar, {backgroundColor: colors.primary}]}>
                <Text style={[styles.text, {color:colors.text}, fonts.medium]}>
                    TopBar
                </Text>
            </View>
            <View>
                <Switch value={dark} onValueChange={toggleTheme} />
            </View>
            <View style={styles.content}>
                <Text style={[styles.text, {color:colors.text}, fonts.regular]}>
                    Welcome to Context World
                </Text>
            </View>
            <View style={[styles.bar, {backgroundColor: colors.accent}]}>
                <Text style={[styles.text, {color:colors.text}, fonts.light]}>
                    BottomBar
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    view: {flex:1},
    bar: {height:50, flexDirection:'row', padding:5, alignItems: 'center'},
    content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    text: {fontSize: 20, textAlign:'center'}
})