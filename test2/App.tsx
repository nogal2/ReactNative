import React from "react";
import { SafeAreaView, Text } from "react-native";

import ClassComponent from "./src/screens/ClassComponent";
import ArrowComponent from "./src/screens/ArrowComponent";
import Person from "./src/screens/Person";

const person = "k"
export default function App() {
  
  React.createElement
    return (
    <SafeAreaView>
      <ClassComponent />
      <ArrowComponent key="df"/>
      <Person  person= {person} />
    </SafeAreaView>
    )
}