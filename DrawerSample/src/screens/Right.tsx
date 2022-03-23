import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useRef } from "react";
import { FlatList, Text, View } from "react-native";
import { Colors } from "react-native-paper";
import { LeftRightNavigation, LeftRightNavigationMethods } from "../compnents";

export default function Right() {

    const navigation = useNavigation()
    const leftRef = useRef<LeftRightNavigationMethods | null>(null)
    const flatListRef = useRef<FlatList | null>(null)
    const goHome = useCallback(() => navigation.navigate('Home'), [])
    return(
        <View style={{flex: 1, backgroundColor:Colors.amber200}}>
            <LeftRightNavigation 
                    ref={leftRef} distance={10}
                    flatListRef={flatListRef}
                    onLeftToRight={goHome} >
                    <Text>Right</Text>
            </LeftRightNavigation>
        </View>
    )
}