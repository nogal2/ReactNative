import React, { FC, useMemo, useState } from "react";
import { Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import PersonUsingObjectState from "./src/screens/PersonUsingObjectState";
import PersonUsingPassingState from "./src/screens/PersonUsingPassingState";
import PersonUsingValueState from "./src/screens/PersonUsingValueState";
import * as D from './src/data'
import { Colors } from "react-native-paper";
import TopBar from "./src/screens/TopBar";

const {width} = Dimensions.get('window')

type PersonInformation = {
  title:string
  Component: FC<any>
}

const personInformations: PersonInformation[] = [
  {title: 'PersonUsingValueState', Component: PersonUsingValueState},
  {title: 'PersonUsingObjectState', Component: PersonUsingObjectState},
  {title: 'PersonUsingPassingState', Component: PersonUsingPassingState}
]

const numberOfComponents = personInformations.length

// prettier-ignore
export default function App() {
  console.log('App')
  //const people = useMemo(() => D.makeArray(10).map(D.createRandomPerson), [])
  const [people, setPeople] = useState<D.IPerson[]>([])

  console.log('people usememo')

  const children = useMemo(() =>
    personInformations.map(({title, Component}:PersonInformation) => (
      <View style={{flex:1}} key={title}>
        <Text style={[styles.text]}>{title}</Text>
        <FlatList data={people}
          renderItem={({item}) => <Component person={item} /> }
          keyExtractor= {(item, index) => item.id}
          ItemSeparatorComponent= {() => <View style={styles.itemSeparator} />} />
      </View>
    )), [people.length])
    // people.length로 하는 이유는 people로 하면 상태의 변화를 감지 못해서(배열은 객체이므로) 콜백함수를 호출하지 못함.
    // length로 하면 길이가 바뀌니가 상태가 변화되어 해당 컴포넌트를 재 렌더링함.

    console.log('children usememo')

    return (
      <SafeAreaView style={styles.flex}>
        <TopBar setPeople={setPeople} />
        <ScrollView horizontal
          contentContainerStyle={styles.horizontalScrollView}>
            {children}
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  flex: {flex:1},
  itemSeparator: {borderWidth: 1, borderColor: Colors.grey500},
  horizontalScrollView: {width: width * numberOfComponents},
  text: {fontSize: 24, textAlign: 'center'}
})