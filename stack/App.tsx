import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import MainNavigator from "./src/screens/MainNavigator";

/* 
npm i -D @types/react-native-vector-icons

*/

export default function App() {
  
  return(
    <NavigationContainer>
      
        <MainNavigator />
        
    </NavigationContainer>
  )
}