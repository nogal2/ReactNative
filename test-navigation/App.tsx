import 'react-native-gesture-handler'
import React, { useCallback, useState } from "react";
import { Alert, Button, Image, Linking, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer' 
import DrawerHomeScreen from './src/homeDrawer';
import DrawerUserScreen from './src/userDrawer';


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export default function App() {

  // const logoTitle = () => {
  //   return(
  //     <Image 
  //       style={{width:40, height:40}}
  //       source={require('./src/assets/pics/home_icon.png')}
  //     />
  //   )
  // }
  const CustomDrawerContent = (props: any) => {
    return(
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem 
            label="Help"
            onPress={() => Linking.openURL("http://www.google.com")}
            icon = {()=> <LogoTitle />}
          />
          <DrawerItem 
            label = "Info"
            onPress={()=> Alert.alert('Info Window')}
          />
        </DrawerContentScrollView>
    )
  }

  return(
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{
          drawerType:"front",
          drawerPosition:'right',
          drawerStyle: {
            backgroundColor: '#c6cbef',
            width:200
          },
          drawerActiveTintColor: 'red',
          drawerActiveBackgroundColor:'skyblue'
        }}
        drawerContent={props => CustomDrawerContent(props) }
        
        
      >
        <Drawer.Screen 
          name="Home" 
          component={DrawerHomeScreen}
          />
        <Drawer.Screen name="User" component={DrawerUserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>


    // <NavigationContainer>
    //   <Stack.Navigator 
    //     initialRouteName='Home'
    //     screenOptions={{
    //         headerStyle: {
    //             backgroundColor: 'pink'
    //         },
    //         headerTintColor: 'red',
    //         headerTitleStyle: {
    //           fontWeight: 'bold',
    //           color: 'purple'
    //         }
            
    //       }}   
    //   >
    //     <Stack.Screen 
    //       name="Home" 
    //       component={HomeScreen}
    //       options={{
    //         title: "Home Screen",
    //         headerTitle: LogoTitle,
    //         headerRight: (() => (
    //           <Button 
    //             title="Info"
    //             onPress={() => Alert.alert('I am a button!')}
    //             color='orange'
    //           />
    //         ))
    //       }} 
    //     />
    //     <Stack.Screen 
    //       name="User" 
    //       component={UserScreen}
    //       initialParams={{
    //         userIdx: 50,
    //         userName: 'Gildong',
    //         userLastName:'go'
    //       }} 
    //       options={{
    //         title:"User Screen",
    //         headerStyle: {
    //             backgroundColor: 'pink'
    //         },
    //         headerTintColor: 'red',
    //         headerTitleStyle: {
    //           fontWeight: 'bold',
    //           color: 'purple'
    //         }
            
    //       }} 
    //       />
        
    //   </Stack.Navigator>

    // </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
  
  })