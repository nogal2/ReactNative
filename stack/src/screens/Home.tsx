import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { Colors } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationHeader } from "../theme/NavigationHeader";

export default function Home() {
    //navigation
    const navigation = useNavigation()
    const goLeft = useCallback(() => navigation.navigate('HomeLeft'), [])
    const goRight = useCallback(
        () => navigation.navigate('HomeRight', {name: 'Jack', age:32}), [])
    
    return (
            <View style={{flex: 1,backgroundColor: Colors.blue200}}>
            <NavigationHeader viewStyle={{backgroundColor:'white'}} title="홈" />
                <View style={{flex: 1,alignItems:'center', justifyContent:'center', backgroundColor: Colors.blue200}}>
                    <Text>Home</Text>
                    <View style={{margin: 10}}>
                        <Button title="goright" onPress={goRight} />
                    </View>
                    <View style={{margin: 10}}>
                        <Button title="goLeft" onPress={goLeft} />
                    </View>
                </View>
            </View>
    )
}