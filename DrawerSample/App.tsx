import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/screens/MainNavigator";

/* 
npm i react-native-vector-icons react-native-paper color moment moment-with-locales-es6
npm i -D @types/react-native-vector-icons @types/color
npx react-native link react-native-vector-icons
npm i react-native-gesture-handler react-native-safe-area-context react-native-screens react-native-reanimated
npm i @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/drawer
npm i @react-native-community/masked-view @react-navigation/native
npm install @react-navigation/native-stack
*/

export default function App() {
  
  return(
    <NavigationContainer>
        <MainNavigator />
    </NavigationContainer>
  )
}