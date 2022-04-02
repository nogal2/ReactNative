import React, { useCallback, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Generator from "./src/Generator";
import Header from "./src/header";
import NumList from "./src/Numlist";

export default function App() {
  const [appName, setAppName] = useState('My First App')
  const [random, setRandom] = useState<Array<number>>([36,999])

  const onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100)+1;  // Math.floor는 소수점 이하 버림
  }

  return(
    <View style={styles.mainView}>
      <Header name={appName} />
      <Text
        style={styles.mainText}
        onPress={() => Alert.alert('text touch event')}
      >Hello world
      </Text>
      <Generator add={onAddRandomNum} />
      <NumList num={random} />
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
      padding:20
    }
  
  })