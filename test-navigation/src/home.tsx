import { useLinkProps, useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { Alert, Button, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"


const HomeScreen = () => {

    const navigation = useNavigation()

    return(
        <View style= {{
            flex:1,
            alignItems:'center',
            justifyContent: 'center'
        }}>
            <Text>HomeScreen</Text>
            <Button 
                title="To User Screen"
                onPress={() => {
                    navigation.navigate('User', {
                        userIdx: 100,
                        userName: 'Gildong',
                        userLastName:'Hong'
                    })
                }}
            />
            <Button 
                title="Change the title"
                onPress={() =>
                    navigation.setOptions({
                        title:"Changed!!!",
                        headerStyle: {
                            backgroundColor: 'pink'
                        },
                        headerTintColor: 'red'
                    })
                }
            />
        </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
   

 
})