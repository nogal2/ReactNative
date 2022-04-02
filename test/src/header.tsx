import React from "react"
import { Alert, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"

const Header = (props:any) => {


  return(
    <TouchableOpacity
      style={styles.header}
      //onPress={() => Alert.alert('hello world')}
      //onLongPress={() => Alert.alert('hello world')}
      //onPressIn={() => Alert.alert('hello world')}
      onPressOut={() => Alert.alert('hello world')}
    >
     <View>
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
    
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding:5,
    width: '100%'
  }  
 
})