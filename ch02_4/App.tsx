import React from "react";
import { Alert, Button, SafeAreaView, Text, TextInput, TouchableHighlight, TouchableOpacity } from "react-native";

const onPress = () => Alert.alert('home pressed.', 'message')

export default function App() {
  return (
  <SafeAreaView>
    <Button title="Home" onPress={onPress} />
    
    <TouchableOpacity onPress={onPress}>
      <Text>TouchableOpacity</Text>
    </TouchableOpacity>

    <TouchableHighlight onPress={onPress}>
      <Text>TouchableHighlight</Text>
    </TouchableHighlight>

    <TextInput
      placeholder="enter your name"
      onChangeText={(text: string) => console.log(text)}
      onFocus={() => console.log("onFocus")}  // 매개변수 없어도 사용가능
      onBlur={() => console.log("onBlur")}    // 매개변수 없어도 사용가능
      onEndEditing = {() => console.log("onEndEdting")} // 매개변수 없어도 사용가능
      /> 

  </SafeAreaView>
  )
}