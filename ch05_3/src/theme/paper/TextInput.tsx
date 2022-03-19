import React, { ComponentProps, FC, forwardRef, ForwardRefRenderFunction, useMemo } from "react";
import { useTheme } from "react-native-paper";
import { TextInput as RNTextInput } from "react-native";

export type TextInputProps = ComponentProps<typeof RNTextInput>
// typeof 를 통해 TextInput 속성을 TextInputProps 으로 넘김. 이 타입을 사용하면 TextInput 속성을 사용할 수 있음.

const _TextInput: ForwardRefRenderFunction<RNTextInput, TextInputProps> = ({style, ...props}, ref) => {
    const {colors} = useTheme()
    return (
        <RNTextInput
            ref={ref}
            style={[{color:colors.text,borderColor: colors.placeholder}, style]} {...props} />
    )
    // TextInput과 TextInput 속성을 _TextInput 에게 다 넘겨줌. 
}

export const TextInput = forwardRef(_TextInput)