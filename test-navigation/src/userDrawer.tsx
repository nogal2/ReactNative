import { useNavigation, useRoute } from "@react-navigation/native"
import React, { useState } from "react"
import { Alert, Button, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"

const DrawerUserScreen = () => {
    const navigation = useNavigation()
    const DrawerStyle = () => {
        navigation.setOptions({
            
        })
    }
    
    return(
        <View style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>userDrawer</Text>
            <Button 
                title="To Home Screen"
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
        </View>

    )
}

export default DrawerUserScreen

const styles = StyleSheet.create({
   

 
})