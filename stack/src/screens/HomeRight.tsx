import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useRef } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { Colors } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LeftRightNavigation, LeftRightNavigationMethods } from "../compnents";
import { NavigationHeader } from "../theme";

export default function HomeRight() {
    const navigation = useNavigation()
    const goLeft = useCallback(() => navigation.navigate('HomeLeft'), [])
    const goRight = useCallback(
        () => navigation.navigate('HomeRight', {name: 'Jack', age:32}), [])
    const goHome = useCallback(() => navigation.navigate('Home'), [])
    const goBack = useCallback(() => navigation.canGoBack() && navigation.goBack(), [])

    const route = useRoute()

    const leftRef = useRef<LeftRightNavigationMethods | null>(null)
    const flatListRef = useRef<FlatList | null>(null)
    return (
        <View style={{flex: 1, backgroundColor: Colors.green200}}>
            <NavigationHeader viewStyle={{backgroundColor:'white'}} 
                Left= {() => (<Icon name="arrow-left" size={50} onPress={goBack}/>)}
                Right={() => (<Icon name="home-circle" size={50} onPress={goHome}/>)} title="오른쪽" />
            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                <LeftRightNavigation 
                    ref={leftRef} distance={10}
                    flatListRef={flatListRef}
                    onLeftToRight={goHome} onRightToLeft={goRight}>
                    <Text>HomeRight</Text>
                    <View style={{margin: 10}}>
                        <Button title="goright" onPress={goRight} />
                    </View>
                    <View style={{margin: 10}}>
                        <Button title="goLeft" onPress={goLeft} />
                    </View>
                    <View style={{margin: 10}}>
                        <Text>{JSON.stringify(route, null, 2)}</Text>
                    </View>
                </LeftRightNavigation>
            </View>
        </View>
    )
}