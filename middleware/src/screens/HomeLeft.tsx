import { useFocusEffect, useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useRef } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { Colors } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LeftRightNavigation, LeftRightNavigationMethods } from "../compnents";
import { NavigationHeader } from "../theme/NavigationHeader";

export default function HomeLeft() {

    const focused = useIsFocused()  // 현재 화면이 활성화되고(focus) 화면인지 아닌지 알려주는 훅
    useEffect(() => {
        console.log('HomeLeft isFocused', focused)
    }, [focused])
    useFocusEffect(() => {
        console.log('useFocusEffect called')    // useIsFocused가 true 일 때만(이 화면이 Focus되었을때만) 여기가 호출됨.
    })

    const navigation = useNavigation()
    const goHomeRight = useCallback(() => navigation.navigate('HomeRight', {name: 'Jack', age:32}), [])
    const goHomeLeft = useCallback(() => navigation.navigate('HomeLeft'), [])
    const goBack = useCallback(() => navigation.canGoBack() && navigation.goBack(), [])
    const goHome = useCallback(() => navigation.navigate('Home'), [])
    const leftRef = useRef<LeftRightNavigationMethods | null>(null)
    const flatListRef = useRef<FlatList | null>(null)
    return (
            
            <View style={{flex: 1, backgroundColor: Colors.red200}}>
            <NavigationHeader viewStyle={{backgroundColor:'white'}} 
                Left= {() => (<Icon name="arrow-left" size={50} onPress={goBack}/>)}
                Right={() => (<Icon name="home-circle" size={50} onPress={goHome}/>)} title="왼쪽" />
                <View style={{flex: 1, alignItems:'center', justifyContent:'center', backgroundColor: Colors.red200}}>
                <LeftRightNavigation 
                    ref={leftRef} distance={10}
                    flatListRef={flatListRef}
                    onRightToLeft={goHome} >
                    <Text>HomeLeft</Text>
                    <View style={{margin: 10}}>
                            <Button title="goright" onPress={goHomeRight} />
                    </View>
                    <View style={{margin: 10}}>
                        <Button title="goLeft" onPress={goHomeLeft} />
                    </View>

                    <View style={{margin: 10}}>
                        <Button title="돌아가기" onPress={goBack} />
                    </View>
                </LeftRightNavigation>
                </View>
            </View>
    )
}