import React from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { findNodeHandle, Keyboard, KeyboardAvoidingView, NativeSyntheticEvent, Platform, StyleSheet, Switch, Text, TextInput, TextInputFocusEventData, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Colors, useTheme } from "react-native-paper";
import { AutoFocusProvider, useAutoFocus, useToggleTheme } from "../contexts";
import * as D from '../data'


export default function KeyboardAware() {
    
    const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson())
    const {dark, colors} = useTheme()
    const toggleTheme = useToggleTheme()

    const textInputRef = useRef<TextInput | null>(null)
    const setFocus = useCallback(() => 
        textInputRef.current?.focus(), [textInputRef]
    )

    const textInputStyle = useMemo(() => [
        styles.textInput,
        {color: colors.text, borderColor: colors.placeholder}], 
    [])

    const autoFocus = useAutoFocus()

    return (
        <View style={[styles.view, {backgroundColor: colors.surface}]}>
            <View style={[styles.topBar, {backgroundColor: colors.accent}]}>
                <Text style={[styles.textButton]} onPress={setFocus}>focus</Text>
                <Text style={[styles.textButton]} onPress={Keyboard.dismiss}>dismiss keyboard</Text>
                <View style={{flex:1}} />
                <Switch value={dark} onValueChange={toggleTheme} />
            </View>
            <AutoFocusProvider contentContainerStyle={[styles.flex]}>
                <View style={[styles.flex]} />
                <View style={[styles.textView]}>
                    <Text style={[styles.text, {color:colors.text}]}>email</Text>
                    <TextInput
                        ref={textInputRef}
                        onFocus={autoFocus}
                        style={textInputStyle}
                        value={person.email} placeholder='enter your email'
                        onChangeText={(email) => setPerson((person) => ({...person, email}))} />
                </View>
                <View style={[styles.textView]}>
                    <Text style={[styles.text, {color:colors.text}]}>name</Text>
                    <TextInput
                        ref={textInputRef}
                        onFocus={autoFocus}
                        style={textInputStyle}
                        value={person.name} placeholder='enter your name'
                        onChangeText={(name) => setPerson((person) => ({...person, name}))} />
                </View>
            </AutoFocusProvider>
        </View>
    )
}

const styles = StyleSheet.create ({
    view: {flex:1},
    topBar: {flexDirection:'row', padding:5},
    textButton: {marginLeft:10, fontSize:20},
    keyboardAvoidingView: {flex:1, padding:10},
    textView: {padding:5},
    text: {fontSize: 24},
    textInput: {fontSize:24, borderWidth: 1, borderRadius: 5},
    flex: {flex:1}
})