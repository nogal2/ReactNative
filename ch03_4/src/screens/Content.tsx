import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native-paper";

const title = 'Content'
const avatars = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

console.log(avatars[22])
const avatarUrl = 'https://reactnative.dev/img/tiny_logo.png'
export default function Content() {
    const children = avatars.map((index) => (
        
        <View key={index.toString()} style={styles.avatarView}>
            <Image style={styles.avatar} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} />
        </View>
    ))
    //console.log(children)
    return <ScrollView contentContainerStyle={styles.view}>{children}</ScrollView>
}

const styles = StyleSheet.create ({
    view: {
        flexDirection: 'row',
        overflow: 'visible',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding:5, 
        //flex: 1   // contentContainerStyle 이건 flex 없어야 작동함.
    },
    text: {fontSize: 20},
    avatarView: {padding: 3},
    avatar: {width: 150, height: 150, borderRadius:25}
})