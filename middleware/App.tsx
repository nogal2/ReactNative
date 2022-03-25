import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/screens/MainNavigator";
import { makeStore } from "./src/store";
import { Provider as ReduxProvider } from "react-redux";

/* 
npm i @react-navigation/drawer
npm install react-native-gesture-handler react-native-reanimated
npm i react-native-vector-icons react-native-paper color moment moment-with-locales-es6 react-native-safe-area-context react-native-screens
npm i -D @types/react-native-vector-icons @types/color
npx react-native link react-native-vector-icons
npm i @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/native @react-navigation/native-stack 
npm i redux react-redux redux-thunk
npm i -D @types/react-redux @types/redux-thunk
npm i @react-native-async-storage/async-storage
*/

const store = makeStore()

export default function App() {
  
  return(
    <ReduxProvider store={store}>
      <NavigationContainer>
          <MainNavigator />
      </NavigationContainer>
    </ReduxProvider>
  )
}