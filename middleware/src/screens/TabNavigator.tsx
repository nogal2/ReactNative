import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import HomeNavigator from "./HomeNavigator";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { Colors } from "react-native-paper";
import Counter from "./Counter";
import Clock from "./Clock";
import People from "./People";
import UseReducer from "./UseReducer";
import ThunkFetch from "./ThunkFetch";
import Fetch from "./Fetch";



type TabBarIconProps = {focused: boolean; color:string; size: number}

const icons: Record<string, string[]> = {
    HomeNavigator: ['home-circle', 'home-circle-outline'],
    Fetch: ['eye-plus', 'eye-plus-outline'],
    ThunkFetch: ['clock-alert', 'clock-alert-outline']
}

// 아이콘 선택하면 모양 변화
const screenOptions = ({route}: {route: RouteProp<ParamListBase, string>}) => {
    
    return {
        headerShown:false,
        tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
            const {name} = route
            const focusedSize = focused ? size + 6 : size
            const focusedColor = focused ? Colors.lightBlue500 : color
            const [icon, iconOutline] = icons[name]
            const iconName = focused ? icon : iconOutline
            return <Icon name={iconName} size={focusedSize} color={focusedColor} />
        }
    }
}

const Tab = createBottomTabNavigator()

export default function TabNavigator() {

    return(
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="HomeNavigator" component={HomeNavigator} options={{tabBarLabel: 'Home', tabBarBadge: 3}}/>
            <Tab.Screen name='Fetch' component={Fetch} />
            <Tab.Screen name='ThunkFetch' component={ThunkFetch} />
        </Tab.Navigator>
    )
}