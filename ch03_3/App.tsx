import React from "react";
import { Image, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native-paper";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
// prettier-ignore


const onIconPressed = () => console.log('icon pressed')
const avartarSize = 50
const avartarUrl = 'https://reactnative.dev/img/tiny_logo.png'
const text = 'Almost before we knew it, we had left the ground'
export default function App() {
  return (
  <SafeAreaView style={styles.flex} >
    <ImageBackground 
      style={[styles.flex]} 
      source={require('./src/assets/images/bg.jpg')} >
      <Image source={{uri: avartarUrl}} style={[styles.image]} />
      <View style={[styles.flex, styles.padding10]}>
        <Text style={[styles.text, styles.regular]}>{text} [regular]</Text>
        <Text style={[styles.text, styles.medium]}>{text} [medium]</Text>
        <Text style={[styles.text, styles.semiBold]}>{text} [semiBold]</Text>
        <Text style={[styles.text, styles.bold]}>{text} [bold]</Text>
      </View>
      <Icon name="home" size={50} color={Colors.lightBlue500} onPress={onIconPressed} />
    </ImageBackground>
    
  </SafeAreaView>
  )
}
// Image나 ImageBackground 는 width와 height값이 들어가야만 한다(혹은 flex).
// prettier-ignore
const styles = StyleSheet.create({
  flex: {flex:1},
  backgroundImage: {flex:1},
  padding10: {padding:10},
  image: {width: avartarSize, height: avartarSize, borderRadius: avartarSize/2},
  text: {textAlign: 'center', fontSize:25, color:'white', marginBottom: 10},

  regular: {fontFamily: 'DancingScript-Regular', fontWeight: '400'},
  medium: {fontFamily: 'DancingScript-Medium', fontWeight: '500'},
  semiBold: {fontFamily: 'DancingScript-SemiBold', fontWeight: '600'},
  bold: {
    fontFamily: 'DancingScript-Bold',
    fontWeight: Platform.select({ios: '700', android: '600'})
  }
})