import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import React, { useMemo } from "react";
import { Colors } from "react-native-paper";
import Home from "./Home";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

const Stack = createNativeStackNavigator()

export default function MainNavigator() {

    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{headerShown: false}}
            /* screenOptions = {{
                headerStyle: {
                    backgroundColor: Colors.pink500 // 헤더 바탕색
                },
                headerTintColor: 'white',           // 글자 색상
                headerTitleStyle: {
                    fontWeight: 'bold'              
                }
            }} */
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="HomeLeft" component={HomeLeft} options={{animation: 'slide_from_left'}} />
            <Stack.Screen name="HomeRight" component={HomeRight} options={{animation: 'slide_from_right'}} />
        </Stack.Navigator>
    )
}