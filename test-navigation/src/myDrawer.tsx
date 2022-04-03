import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { Alert, Button, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { CommonActions } from "@react-navigation/native"


const SideDrawer = () => {
    const navigation = useNavigation()
    //중괄호 안에 있는 리턴값을 또 리턴값으로 받는것. 그 때 파라미터가 route
    const navigateToScreen = (route) => () => {
        navigation.dispatch(
            CommonActions.navigate({
                name:route,
                params:{},
            })
        )
    }
    return(
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.imageContainer}>
                        <Image 
                            source={require('./assets/pics/home_icon.png')}
                            style={{width:40, height:40}}
                        />
                    </View>
                    <Text style={styles.sectionHeading}>Section 1</Text>
                    <View style={styles.navSectionStyle}>
                        <Text 
                            style={styles.navItemStyle}
                            onPress={() => navigation.navigate("Home")}>
                            Home
                        </Text>
                        <Text 
                            style={styles.navItemStyle}
                            onPress={() => navigation.navigate("User")}>
                            User
                        </Text>
                        <Text 
                            style={styles.navItemStyle}
                            onPress={() => Alert.alert('help window')}>
                            Help
                        </Text>
                        <Text 
                            style={styles.navItemStyle}
                            onPress={() => Alert.alert('info')}>
                            Info
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{paddingLeft:10, paddingBottom:30}}>
                <Text>Copyright @ Wintho, 2020.</Text>
            </View>
        </View>

    )
}

export default SideDrawer

const styles = StyleSheet.create({
   container: {
       flex:1,
       padding:10
   },
   imageContainer: {
       alignItems:'center',
       padding:50
   },
   sectionHeading: {
       color: '#fff',
       backgroundColor: '#ef9de4',
       paddingVertical: 10,
       paddingHorizontal: 15,
       fontWeight: 'bold'
   },
   navSectionStyle: {
       backgroundColor:'#04b6ff'
   },
   navItemStyle: {
       padding:10,
       color: '#fff'
   }

 
})