import React, { useRef, useState } from "react"
import { ActivityIndicator, Alert, Button, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import Slider from '@react-native-community/slider';

const Picker = () => {
    const [value, setValue] = useState<number>(50)

    return(
        <View style={styles.container}>
            
            <Slider 
                style={{height:40, width:300}}
                value={value} 
                minimumValue={0}
                maximumValue={100}
                onValueChange={(value) => setValue(value)}
                maximumTrackTintColor='red'
                minimumTrackTintColor="blue"
                step={10}
                />
                <Text style={styles.input}>{value}</Text>
                <ActivityIndicator 
                    style={{paddingTop:200}}
                    size="large"
                    color="green"
                    animating={true}
                />
            
        </View>

    )
}

export default Picker

const styles = StyleSheet.create({
   container: {
       flex:1,
       paddingTop: 20,
       marginBottom: 200,
       alignItems: 'center'
   },
   input: {
       width: '100%',
       marginTop: 20,
       fontSize:25
   }

 
})