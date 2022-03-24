import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { FC, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import { AppState, User } from "../store";
import { NavigationHeader } from "../theme";

const title = 'DrawerContent'
const DrawerContent: FC<DrawerContentComponentProps> = (props) => {
    console.log(Object.keys(props))

    const loggedIn = useSelector<AppState, boolean>(    // loggedIn 은 타입이 boolean 이기 때문에.
        (state) => state.loggedIn
    )
    // rootReducer.ts 에서 생성한 initialState 객체를 loggedIn 라는 이름으로 얻음.
    const loggedUser = useSelector<AppState, User>(
        (state) => state.loggedUser
    )
    const {email, name} = loggedUser
    console.log(`loggedIn: ${loggedIn} loggedUser: ${loggedUser.email}`)
    const {navigation} = props
    const close = useCallback(() => navigation.dispatch(DrawerActions.closeDrawer()), [])

    if(!loggedIn) {
        return (
            <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
                <NavigationHeader viewStyle={{backgroundColor:'white'}} 
                        Left= {() => (<Icon name="arrow-left" size={50} />)}
                        Right={() => (<Icon name="close" size={24} onPress={close} />)} />
                <View style={styles.content}>
                
                    <Text style={[styles.text]}>로그인 혹은 회원가입 해주세요</Text>
                    <Text>{email}</Text>
                    <Text>{name}</Text>
                </View>
            </DrawerContentScrollView>
        )
    } else {
        return (
            
            <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
                <NavigationHeader viewStyle={{backgroundColor:'white'}} 
                        Left= {() => (<Icon name="arrow-left" size={50} />)}
                        Right={() => (<Icon name="close" size={24} onPress={close} />)} />
                <View style={styles.content}>
                
                    <Text style={[styles.text]}>{title}</Text>
                    <Text>{email}</Text>
                    <Text>{name}</Text>
                </View>
            </DrawerContentScrollView>
        )
    }
}
export default DrawerContent

const styles = StyleSheet.create({
    view: {flex:1},
    text: {fontSize:20},
    content: {flex:1, alignItems:'center', justifyContent:'center'}
})
