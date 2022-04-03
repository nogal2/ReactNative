import { useLinkProps, useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { Alert, Button, Image, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import Logo from './assets/pics/home_icon.png'

const LogoTitle = () => {

    const navigation = useNavigation()

    return(
        <Image 
            style={{width:40, height:40}}
            source={Logo}
        />

    )
}

export default LogoTitle

const styles = StyleSheet.create({
   

 
})