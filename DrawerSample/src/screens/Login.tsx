import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Text, Touchable, TouchableHighlight, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native-paper";

export default function Login() {

    const navigation = useNavigation()
    const goHomeNavigator = useCallback(() => navigation.navigate('TabNavigator'), [])
    const goSignUp = useCallback(() => navigation.navigate('SignUp'), [])

    return(
        <View style={{flex:1, alignItems:'center', backgroundColor:Colors.amber200}}>
            <Text>Login</Text>
            <TouchableHighlight style={{height:50, width:50, margin:50}} onPress={goHomeNavigator} underlayColor={Colors.blue300}>
                <Text>로그인</Text>    
            </TouchableHighlight> 
            <TouchableHighlight style={{height:50, width:50, margin:50}} onPress={goSignUp} underlayColor={Colors.blue300}>
                <Text>회원가입</Text>    
            </TouchableHighlight> 
        </View>
    )
}
