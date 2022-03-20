import { Animated } from "react-native";

export const interpolate = (
    animValue: Animated.Value,              // 생성한 Animated.Value 변수를 넣으면됨
    outputRange: number[] | string[],       // 출력하고 싶은 범위
    inputRange: number[] = [0, 1]           // 입력하고 싶은 범위
): Animated.AnimatedInterpolation => {
    return animValue.interpolate({inputRange, outputRange})
}