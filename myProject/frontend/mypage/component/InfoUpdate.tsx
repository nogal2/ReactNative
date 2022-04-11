import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Alert, Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native-paper";
import { color } from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { NavigationHeader } from "../../theme";
import * as D from "../../store/drawer"
import { AppState } from "../../store";

const InfoUpdate = ({loggedUser}:any) => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const goBack = useCallback(() => navigation.canGoBack() && navigation.goBack(), [])
    const [modalVisible, setModalVisible] = useState(false)

    const [info, setInfo] = useState({
        memberId: loggedUser.memberId,
        memberNickname: loggedUser.memberNickname,
        memberName: loggedUser.memberName,
        memberGender: loggedUser.memberGender,
        memberGrade: loggedUser.memberGrade,
        memberEmail: loggedUser.memberEmail,
        memberPhone: loggedUser.memberPhone,
        memberMainAddr: loggedUser.memberMainAddr,
        memberDetailAddr: loggedUser.memberDetailAddr,
        memberZipcode: loggedUser.memberZipcode
    })

    const goShoppingCart = () => {
        dispatch(D.drawerChangeFalseAction())
        navigation.dispatch(DrawerActions.openDrawer())
    }
    const goSetting = () => {
        dispatch(D.drawerChangeTrueAction())
        navigation.dispatch(DrawerActions.openDrawer())
    }

    return (
        <SafeAreaView style={{flex:1}}>
             <View style={[styles.topBar]}> 
                <NavigationHeader title="내 정보" 
                Left= {() => <Icon name="arrow-left" size={30} onPress={goBack} />}
                Right= {() => <Icon name="cart-heart" size={30} onPress={goShoppingCart} />} />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed")
                    setModalVisible(!modalVisible)
                }}
            >
                <View>
                    <View>
                        <Text>Hello</Text>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <Text>모달 닫기</Text>
                        </Pressable>
                    </View>
                </View>
                
            </Modal>
            <View>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Text>모달 보기</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default InfoUpdate

const styles = StyleSheet.create({
    topBar: {
        borderWidth: 0.5,
    },
    contentView: {
        padding:20,
        borderBottomWidth:0.5,
        borderBottomColor:Colors.grey500
    },
    content: {
        borderWidth:1,
        borderRadius:10,
        width:200,
        marginTop: 10,
        justifyContent:'center',
        alignItems:'center',
    },
})