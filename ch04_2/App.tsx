import React from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Cache from "./src/screens/Cache";
import Fibo from "./src/screens/Fibo";
import Memo from "./src/screens/Memo";

/* 
npm i react-native-vector-icons react-native-paper color moment moment-with-locales-es6
npm i -D @types/react-native-vector-icons @types/color
npx react-native link react-native-vector-icons
npx pod-install
*/

const {width} = Dimensions.get('window')  // 에뮬레이터 가로 길이
const numberOfcomponents = 3

// prettier-ignore
export default function App() {
  return (
    <SafeAreaView>
      <ScrollView horizontal contentContainerStyle={[styles.contentContainerStyle]} >
        <Cache />
        <Memo />
        <Fibo />
      </ScrollView>
    </SafeAreaView>
  )
}
//  <ScrollView horizontal contentContainerStyle={[styles.contentContainerStyle]} > => 아래에 있는 컴포넌트를 FlatList로 사용할 껀데, 
// 스크롤이 있는 코어컴포넌트가 부모자식 관계면 서로 다른 방향으로 해야해서 부모인 ScrollView를 horizaontal(수평, 기본값이 true) 으로 바꿨다.
const styles =StyleSheet.create ({
  SafeAreaView: {flex: 1},
  contentContainerStyle: {width: width * numberOfcomponents}  // 수평스크롤을 위한 넓이 설정
}) 