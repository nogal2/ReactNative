import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";

import * as D from '../data'
import * as L from "../store/login";
import { NavigationHeader } from "../theme";

export default function SignUp() {

    const [email, setEmail] = useState<string>(D.randomEmail())
    const [name, setName] = useState<string>(D.randomName())
    const [password, setPassword] = useState<string>('1')
    const [confirmPassword, setConfirmPassword] = useState<string>(password)
    const goBack = useCallback(() => navigation.canGoBack() && navigation.goBack(), []) 

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const goHomeNavigator = useCallback(() => {
        if (password === confirmPassword) {
          dispatch(L.signUpAction({name, email, password}))
          navigation.navigate('TabNavigator')
        } else Alert.alert('password is invalid')
      }, [name, email, password, confirmPassword])
      const goLogin = useCallback(() => navigation.navigate('Login'), []) 

    return(
        <View style={[styles.view]}>
          <NavigationHeader viewStyle={{backgroundColor:'white'}} 
                Right={() => (<Icon name="home-circle" size={50} onPress={goBack}/>)} title="회원가입" />
          <View style={[styles.textView, {borderColor: 'red', borderWidth:1}]}>
            <Text style={[styles.text]}>email</Text>
            <View style={[styles.textInputView]}>
              <TextInput
                style={[styles.textInput]}
                value={email}
                onChangeText={setEmail}
                placeholder="enter your email"
              />
            </View>
          </View>
          <View style={[styles.textView]}>
            <Text style={[styles.text]}>name</Text>
            <View style={[styles.textInputView]}>
              <TextInput
                style={[styles.textInput]}
                value={name}
                onChangeText={setName}
                placeholder="enter your name"
              />
            </View>
          </View>
          <View style={[styles.textView]}>
            <Text style={[styles.text]}>password</Text>
            <View style={[styles.textInputView]}>
              <TextInput
                style={[styles.textInput]}
                value={password}
                onChangeText={setPassword}
                placeholder="enter your password"
              />
            </View>
          </View>
          <View style={[styles.textView]}>
            <Text style={[styles.text]}>confirm password</Text>
            <View style={[styles.textInputView]}>
              <TextInput
                style={[styles.textInput]}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="confirm password"
              />
            </View>
          </View>
          <TouchableOpacity
            style={[styles.touchableView]}
            onPress={goHomeNavigator}>
            <Text style={[styles.text]}>SignUp</Text>
          </TouchableOpacity>
          <Text
            style={[styles.text, {marginTop: 15}]}
            onPress={goLogin}>
            Login
          </Text>

      </View>
    )
}
const styles = StyleSheet.create({
    view: {flex: 1, justifyContent: 'space-between', alignItems: 'center'},
    text: {fontSize: 20},
    textView: {width: '100%', padding: 5, marginBottom: 10},
    textInput: {fontSize: 24, padding: 10},
    textInputView: {marginTop: 5, borderRadius: 10},
    touchableView: {
      flexDirection: 'row',
      height: 50,
      borderRadius: 10,
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
  