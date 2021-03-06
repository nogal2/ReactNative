import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import DrawerContent from "./DrawerContent";
import Login from "./Login";
import SignUp from "./SignUp";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator()

export default function MainNavigator() {
    
    return(
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}/>} initialRouteName={'Home'} screenOptions={{headerShown:false}}>
            
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="SignUp" component={SignUp} />
            <Drawer.Screen name="TabNavigator" component={TabNavigator}/>
        </Drawer.Navigator>
    )
}