import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { launchCamera } from 'react-native-image-picker'

export default function App() {
  
  const [avatar, setAvatar] = useState<string>('')

  const addImage = () => {
    launchCamera({
  cameraType: 'back',
  mediaType: "photo"
}, (response) => {
      setAvatar(response.uri)
    })
  }

  return (
    <View style={styles.container}>
      <Image 
        source={{uri:avatar}}
        style={styles.avatar}
      />

      <Button 
        title="Add an Image"
        onPress= {() => addImage()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#e4ab26'
  },
  avatar: {
    width:'100%',
    height: 400
  }
})