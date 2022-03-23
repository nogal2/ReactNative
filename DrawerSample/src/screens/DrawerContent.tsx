import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { FC, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationHeader } from "../theme";

const title = 'DrawerContent'
const DrawerContent: FC<DrawerContentComponentProps> = (props) => {
    console.log(Object.keys(props))
    const {navigation} = props
    const close = useCallback(() => navigation.dispatch(DrawerActions.closeDrawer()), [])

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
            <NavigationHeader viewStyle={{backgroundColor:'white'}} 
                    Left= {() => (<Icon name="arrow-left" size={50} />)}
                    Right={() => (<Icon name="close" size={24} onPress={close} />)} />
            <View style={styles.content}>
            
                <Text style={[styles.text]}>{title}</Text>
            </View>
        </DrawerContentScrollView>
    )
}
export default DrawerContent

const styles = StyleSheet.create({
    view: {flex:1},
    text: {fontSize:20},
    content: {flex:1, alignItems:'center', justifyContent:'center'}
})
