import React, { ComponentProps, FC } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableView, TouchableViewProps } from "./TouchableView";

export type IconTextProps = TouchableViewProps & ComponentProps<typeof Icon> & {
    text: number | string
    textStyle: StyleProp<TextStyle>
}

// prettier-ignore
export const IconText: FC<IconTextProps> = ({
    name, size, color, textStyle, text, ...TouchableViewProps}) => {
    
    return (
        <TouchableView {...TouchableViewProps}>
            <Icon name={name} size={size} color={color} />
            <Text style={textStyle}>{text}</Text>
        </TouchableView>
    )
}