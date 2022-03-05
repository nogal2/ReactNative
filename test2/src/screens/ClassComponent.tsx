import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";

export default class ClassComponent extends Component {
    render() {
        const children = new Array(1,2,3,4,5,6,7,8,9,10)
            .map((index) => `Hello world! {index}`)

    return <Text>{children}</Text>
    } // render 메서드에서는 반드시 null 이나 undefined 또는 React.createElement 호출로 얻은 반환 값이나 JSX문 중 하나를 반환해야 한다.
}