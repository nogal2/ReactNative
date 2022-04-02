import React from "react"
import { Alert, Button, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"

const NumList = (props:any) => {

  return(
    props.num.map((item:number, idx:number) => (
        <TouchableOpacity 
          style={styles.numList} 
          key={idx}
          onPress={() => props.delete(idx)}
          >
            <Text>{item}</Text>
        </TouchableOpacity>
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