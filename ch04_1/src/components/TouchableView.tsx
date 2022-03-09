import React, { ComponentProps, FC, ReactNode } from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";

type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity>    //TouchableOpacity의 속성 타입을 알아내고 TouchableOpacityProps 타입으로 만듬

export type TouchableViewProps = TouchableOpacityProps & {  // TouchableOpacity에 있는 속성 타입이 TouchableOpacityProps 타입으로 바뀌었고 
                                                            // TouchableViewProps와 교집합 되는 부분으로 사용할수있음.
    viewStyle?: StyleProp<ViewStyle>
}

// function createElement<P extends {}> {
//     type: FunctionComponent<P> | ComponentClass<P> | string, 
//     props?: Attributes & P | null, 
//     ...children: ReactNode[]): ReactElement<P>;
// }

export const TouchableView: FC<TouchableViewProps> = ({
    children, viewStyle, ...touchableProps}) => {  // ...touchableProps 가변인자: 여러개의 변수를 받기위한 것. TouchableOpacity 속성을 가변인자로 넘겨줄수있음.
        // children은 FC타입이 제공하는 속성을 얻은것.
    return (
        <TouchableOpacity {...touchableProps}>
            <View style={[viewStyle]}>{children}</View>
        </TouchableOpacity>
    )
}