import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native-paper";
import { color } from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { NavigationHeader } from "../../theme";
import * as D from "../../store/drawer"
import { AppState } from "../../store";
import InfoUpdate from "../component/InfoUpdate";
import * as L from "../../store/login"

export default function MyInfoUpdate() {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const goBack = useCallback(() => navigation.canGoBack() && navigation.goBack(), [])

    const log = useSelector<AppState, L.State>((state) => state.login)
    const {loggedIn, loggedUser} = log
   
    const goCheck = useCallback(() => {
        dispatch(D.drawerChangeTrueAction)
    }, [])
    return (
        <InfoUpdate loggedUser={loggedUser} />
    )
}

const styles = StyleSheet.create({
    topBar: {
        borderWidth: 0.5,
    },
    contentView: {
        padding:20,
        borderBottomWidth:0.5,
        borderBottomColor:Colors.grey500
    }
})