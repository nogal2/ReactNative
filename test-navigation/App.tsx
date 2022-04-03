import 'react-native-gesture-handler'
import React, { useCallback, useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';


const Stack = createStackNavigator()

export default function App() {

  const logoTitle = () => {
    return(
      <Image 
        style={{width:40, height:40}}
        source={require('./src/assets/pics/home_icon.png')}
      />
    )
  }

  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
            headerStyle: {
                backgroundColor: 'pink'
            },
            headerTintColor: 'red',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'purple'
            }
            
          }}   
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: "Home Screen",
            headerTitle: LogoTitle,
            headerRight: (() => (
              <Button 
                title="Info"
                onPress={() => Alert.alert('I am a button!')}
                color='orange'
              />
            ))
          }} 
        />
        <Stack.Screen 
          name="User" 
          component={UserScreen}
          initialParams={{
            userIdx: 50,
            userName: 'Gildong',
            userLastName:'go'
          }} 
          options={{
            title:"User Screen",
            headerStyle: {
                backgroundColor: 'pink'
            },
            headerTintColor: 'red',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'purple'
            }
            
          }} 
          />
        
      </Stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
  
  })