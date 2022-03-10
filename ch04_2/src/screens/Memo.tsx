import Color from "color";
import React, { useMemo } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native-paper";
import * as D from '../data'
import { useClock } from "../hooks";
import { createOrUse } from "./createOrUse";
import Person from "./Person";

//const people = D.makeArray(2).map(D.createRandomPerson)
const title = 'Memo'

// prettier-ignore
export default function Memo() {
    const time = useClock()
    // 컴포넌트를 처음 렌더링할 때 한 번만 데이터가 생성되도록 하는 것이 useMemo
    const people = useMemo(() => D.makeArray(2).map(D.createRandomPerson), [//time time을 주면 1초마다 화면이 갱신됨.
    ])
    
    //console.log(people)

    return (
        <View style={styles.view}>
            <Text style={styles.text}>{title}</Text>

            <FlatList
                style={[styles.flatList]}
                data={people}
                renderItem = {({item}) => <Person person={item} />}
                keyExtractor={(item, index) => item.id}
                ItemSeparatorComponent= {() => <View style={styles.itemSeparator} />} />
        </View>
    )
}

const styles = StyleSheet.create ({
    view: {flex:1, padding:5, backgroundColor: Colors.blue900},
    text: {fontSize: 20, color: 'white'},
    flatList: {width: '100%'},
    itemSeparator: {
        borderWidth: 1,
        borderColor: Color(Colors.green500).lighten(0.5).string()
    }
})