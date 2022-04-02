import React from "react"
import { Alert, Button, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"

const Generator = (props:any) => {

  return(
    <View style={styles.generator}>
        <Button
            title="Add Number"
            onPress={() => props.add()}
        />
    </View>
    
  )
}

export default Generator

const styles = StyleSheet.create({
  generator: {
      backgroundColor: '#D197CF',
      alignItems: 'center',
      padding: 5,
      width:'100%'
  }
 
})