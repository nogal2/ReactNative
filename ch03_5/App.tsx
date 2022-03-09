import React from "react";
import { Colors } from "react-native-paper";
import Color from "color";
import Person from "./src/copy/Person";
import * as D from "./src/data";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
//import { styles } from "./src/copy/Person.style";

/* 
npm i react-native-vector-icons react-native-paper color
npm i -D @types/react-native-vector-icons @types/color
npx react-native link react-native-vector-icons
npx pod-install
npm i moment moment-with-locales-es6
*/

const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson)   // FlatList 에 들어갈 데이터 10개

//prettier-ignore
export default function App() {
  return (
    <SafeAreaView style={styles.flex}>
      <FlatList
        data={people}
        renderItem = {({item}) => <Person person={item} />}
        keyExtractor= {(item, index) => item.id}
        ItemSeparatorComponent= {() => <View style={styles.itemSeparator} /> } />
    </SafeAreaView>
  )
  /*                   
      keyExtractor= {(item, index) => item.id}                                    renderItem에서 설정한 콜백함수가 반환하는 컴포넌트의 key 속성에 설정할 값을 얻음
      ItemSeparatorComponent= {() => <View style={styles.itemSeparator} /> } />   각 아이템들을 구분시켜주는 역할을 함.
  */  
  
}

//prettier-ignore
const styles = StyleSheet.create({
  flex: {flex: 1},
  itemSeparator: {
    borderWidth: 1,
    borderColor: Color(Colors.grey500).lighten(0.3).string()
  }
})  