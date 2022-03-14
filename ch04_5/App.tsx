import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MainNavigator from "./src/screens/MainNavigator";

/* 
npm i react-native-vector-icons react-native-paper color moment moment-with-locales-es6
npm i -D @types/react-native-vector-icons @types/color
npx react-native link react-native-vector-icons
npx pod-install
*/

export default function App() {
  return (
    <SafeAreaView style={[styles.SafeAreaView]}>
      <MainNavigator />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  SafeAreaView: {flex:1}
})