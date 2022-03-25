import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { useCallback, useRef } from "react";
import { Button, FlatList, SafeAreaView, Text, View } from "react-native";
import { Colors } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { LeftRightNavigation, LeftRightNavigationMethods } from "../compnents";
import * as L from "../store/login";
import { NavigationHeader } from "../theme/NavigationHeader";

export default function Home() {
    //navigation
    console.log('Home')
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const goHomeRight = useCallback(() => navigation.navigate('HomeRight', {name: 'Jack', age:32}), [])
    const goHomeLeft = useCallback(() => navigation.navigate('HomeLeft'), [])
    const open = useCallback(() => {navigation.dispatch(DrawerActions.openDrawer())}, [])
    const logout = useCallback(() => {
        dispatch(L.logoutAction())
        navigation.navigate('Login')
    }, [])
    const leftRef = useRef<LeftRightNavigationMethods | null>(null)
    const flatListRef = useRef<FlatList | null>(null)
    
    
    return (
            <View style={{flex: 1,backgroundColor: Colors.blue200}}>
            <NavigationHeader viewStyle={{backgroundColor:'white'}} title="홈" 
                Left={() => <Icon name="menu" size={30} onPress={open} />}
                Right={() => <Icon name="logout" size={30} onPress={logout} />} />
                <View style={{flex: 1,alignItems:'center', justifyContent:'center', backgroundColor: Colors.blue200}}>
                <LeftRightNavigation 
                    ref={leftRef} distance={10}
                    flatListRef={flatListRef}
                    onLeftToRight={goHomeLeft} onRightToLeft={goHomeRight}>
                    <Text>Home</Text>
                    <View style={{margin: 10}}>
                        <Button title="goright" onPress={goHomeRight} />
                    </View>
                    <View style={{margin: 10}}>
                        <Button title="goLeft" onPress={goHomeLeft} />
                    </View>
                </LeftRightNavigation>
                </View>
            </View>
    )
}