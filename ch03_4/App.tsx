import React, {Fragment} from "react";
import { Alert, Platform, SafeAreaView, StyleSheet, View } from "react-native";
import { Colors } from "react-native-paper";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import BottomBar from "./src/screens/BottomBar";
import Content from "./src/screens/Content";
import TopBar from "./src/screens/TopBar";

/* 
사전 설정
npm i react-native-vector-icons react-native-paper color
npm i -D @types/react-native-vector-icons @types/color
npx react-native link react-native-vector-icons
npx pod-install
*/

export default function App() {
  const iconPressed = () => Alert.alert('Icon pressed.')
  return (
    <>
      <SafeAreaView style={styles.flex}>
        <TopBar />
        <Content />
        <BottomBar />
        <View style={styles.absoluteView}>
          <Icon name='feather' size={50} color='white' onPress={iconPressed} />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create ({
  flex: {
    flex: 1,
    backgroundColor: Colors.lightBlue100
  },
  absoluteView: {
    backgroundColor: Colors.purple900,
    position: 'absolute',   // right와 bottom 스타일 속성값을 적용하려면 'absolute'로 지정해야한다.
    right: 30,
    bottom: Platform.select({ios: 100, android: 80}),
    padding:10,
    borderRadius:35
  }
})