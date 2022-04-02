import React, { useCallback, useState } from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Generator from "./src/Generator";
import Header from "./src/header";
import Input from "./src/input";
import NumList from "./src/Numlist";

export default function App() {
  
  const [myTextInput, setMyTextInput] = useState<string>('')
  const [alphabet, setAlphabet] = useState<string[]>(['a', 'b', 'c', 'd'])

  const onAddTextInput = () => {
    setMyTextInput('')  // 입력했던 글자열의 수고를 덜어줌.
    setAlphabet((alphabet) => [...alphabet, myTextInput])
  }

  return(
    <View style={styles.mainView}>
      <TextInput
                value={myTextInput}
                style={styles.input}
                onChangeText={(text) => setMyTextInput(text)}
                multiline={true}
                maxLength={100}
                autoCapitalize={'none'}
                editable={true}
            />
      <Button 
        title="Add Text Input"
        onPress={onAddTextInput}
      />

      <ScrollView style={{width:'100%'}}>
        {
          alphabet.map((item, idx) => (
            <Text 
              style={styles.mainText}
              key={idx}>
                {item}
              </Text>
          ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
      backgroundColor: 'white',
      flex:1,
      paddingTop: 50,
      alignItems: 'center',
      //justifyContent: 'center'
    },
    subView: {
      backgroundColor: 'yellow',
      marginBottom:10
    },
    anotherSubView: {
      flex:2,
      backgroundColor: 'yellow',
      marginBottom:10,
      width:'100%',
      alignItems:'center',
      justifyContent: 'center'
    },
    mainText: {
      fontSize: 20,
      fontWeight: 'normal',
      color: 'red',
      padding:20,
      margin:20,
      backgroundColor:'pink'
    },
    input: {
      width: '100%',
      backgroundColor: '#cecece',
      marginTop: 20,
      fontSize:25,
      padding:10
    },
  
  })