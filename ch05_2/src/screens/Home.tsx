import React, { useCallback, useRef, useState } from "react";
import { FlatList, StyleSheet, Switch, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import { useToggleTheme } from "../contexts";
import * as D from '../data'
import Person from "./Person";

export default function People() {
    const [people, setPeople] = useState<D.IPerson[]>([D.createRandomPerson()])
    const theme = useTheme()
    const toggleTheme = useToggleTheme()
    const add = useCallback(() => {
        setPeople((people) => [...people, D.createRandomPerson()])
    }, [])
    const removeAll = useCallback(() => {
        setPeople((notUsed) => [])
    }, [])
    const flatListRef = useRef<FlatList | null>(null)
    const onContentSizeChange = useCallback(
        () => flatListRef.current?.scrollToEnd(),
        /* flatListRef.current는 초깃값 null에서 유효한 값으로 바뀌므로 의존성 목록에 포함되어야 한다. */
        [flatListRef.current]
    )

    return (
        <View style={[styles.view, {backgroundColor: theme.colors.surface}]}>
            <View style={[styles.topBar, {backgroundColor: theme.colors.accent}]}>
                <Text onPress={add} style={[styles.text]}>add</Text>
                <Text onPress={removeAll} style={[styles.text]}>remove all</Text>
                <View style={{flex:1}} />
                <Switch value={theme.dark} onValueChange={toggleTheme} />
            </View>
            <FlatList
                ref={flatListRef}
                data={people}
                renderItem={({item}) => <Person person={item} />}
                keyExtractor={(item) => item.id}
                onContentSizeChange={onContentSizeChange} />
        </View>
    )
    
}

const styles = StyleSheet.create ({
    view: {flex:1},
    topBar: {flexDirection: 'row', padding:5},
    text: {marginRight:10, fontSize: 20}
})