import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Alert, Text, View } from "react-native";
import { Colors } from "react-native-paper";

export default function SignUp() {

    const [password, setPassword] = useState<string>('1')
    const [confirmPassword, setConfirmPassword] = useState<string>(password)

    const navigation = useNavigation()
    const goHomeNavigator = useCallback(() => {
        if(password === confirmPassword) {
            navigation.navigate('TabNavigator')
        } else Alert.alert('password is invalid')
    }, [password, confirmPassword])

    return(
        <View style={{backgroundColor: Colors.cyan200}}>
            <Text>SignUp</Text>
        </View>
    )
}