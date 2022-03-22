/* 
    PanResponder 관련 코드에서 문제 개선하기 위한 커스텀 훅
    문제
    1. 컴포넌트 렌더링할 때마다 panResponder 객체가 계속 생성됨.
    2. true를 반환하는 onStartShouldSetPanResponder와 onMoveShouldSetPanResponder를 계속 구현해야함.
*/

import { useMemo } from "react";
import { GestureResponderEvent, PanResponderCallbacks, PanResponderGestureState, PanResponderInstance } from "react-native";
import {PanResponder} from 'react-native'

type Event = GestureResponderEvent
type State = PanResponderGestureState

const defaultCallback = {
    onStartShouldSetPanResponder: (e:Event, s:State) => true,
    onMoveShouldSetPanResponder: (e:Event, s:State) => true
}

export const usePanResponder = (
    callbacks: PanResponderCallbacks, deps: any[] = []): PanResponderInstance => {
        const panResponder = useMemo<PanResponderInstance>(() => 
        PanResponder.create({...defaultCallback, ...callbacks}), deps)
        return panResponder
    }
