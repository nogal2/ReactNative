import React from "react"
import { Alert, Button, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"

const NumList = (props:any) => {

  return(
    props.num.map((item:number, idx:number) => (
        <View style={styles.numList} key={idx}>
            <Text>{item}</Text>
        </View>
    ))
   
  )
}

export default NumList

const styles = StyleSheet.create({
  numList: {
      backgroundColor: '#cecece',
      alignItems: 'center',
      padding: 5,
      width:'100%',
      marginTop:5
  }
 
})