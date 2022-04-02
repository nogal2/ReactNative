import React, { useState } from "react"
import { Alert, Button, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"

const Input = () => {

    const [myTextInput, setMyTextInput] = useState<string>('')

    

    return(
        <View style={styles.mainView}>
            <TextInput
                value={myTextInput}
                style={styles.input}
                onChangeText={(text) => setMyTextInput(text)}
                multiline={true}
                maxLength={100}
                autoCapitalize={'none'}
                editable={true}
            />
        </View>

    )
}

export default Input

const styles = StyleSheet.create({
    mainView:{
        width: '100%'
    },
    input: {
        width: '100%',
        backgroundColor: '#cecece',
        marginTop: 20,
        fontSize:25,
        padding:10
    },

 
})