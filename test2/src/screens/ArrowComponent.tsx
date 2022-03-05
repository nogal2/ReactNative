import React from "react";
import { Text } from "react-native";

const ArrowComponent = () => {
    const children = new Array(1,2,3,4,5,6,7,8,9,10)
            .map((index) => `Hello world! ${index} \n`)

    return <Text>{children}</Text>
}

export default ArrowComponent