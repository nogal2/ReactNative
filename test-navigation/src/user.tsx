import { useNavigation, useRoute } from "@react-navigation/native"
import React, { useState } from "react"
import { Alert, Button, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"



const UserScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    console.log(route.params.userIdx)
    const userIdx = route.params ? route.params.userIdx : null
    const userName = route.params ? route.params.userName : null
    const userLastName = route.params ? route.params.userLastName : null

    const headerStyle = () => {
        navigation.setOptions ({
            title:"Customizing",
            headerStyle: {
                backgroundColor: 'blue'
            },
            headerTintColor: 'yellow',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'green'
            },
            headerBackTitle: 'back',
            headerRight: (() => (
                <Button 
                  title="go back"
                  onPress={() => {
                      navigation.navigate("Home")
                  }}
                  color='orange'
                />
            ))
        })
    }
    
    headerStyle()

    return(
        <View style= {{
            flex:1,
            alignItems:'center',
            justifyContent: 'center'
        }}>
            <Text>UserScreen</Text>
            <Button 
                title="To Home Screen"
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
            <Text>User idx: {userIdx}</Text>
            <Text>User Name: {userName}</Text>
            <Text>User LastName: {userLastName}</Text>
        </View>
    )
}

export default UserScreen

const styles = StyleSheet.create({
   

 
})