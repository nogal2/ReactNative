import React, { FC } from "react";
import { Image, ImageStyle, StyleProp } from "react-native";
import { TouchableView, TouchableViewProps } from "./TouchableView";

export type AvatarProps = TouchableViewProps & {
    uri: string
    size: number
    imageStyle?: StyleProp<ImageStyle>
}

// prettier-ignore
export const Avatar: FC<AvatarProps> = ({uri, size, imageStyle, ...touchableViewProps}) => {
    return (
        <TouchableView {...touchableViewProps}>
            <Image 
                source={{uri}}
                style={[imageStyle, {width: size, height: size, borderRadius: size/2}]} />
        </TouchableView>
    )
}