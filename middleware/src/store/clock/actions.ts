import { TabBarIOSItem } from 'react-native'
import type * as T from './types'

export const setTimeAction = (time:Date = new Date()): T.SetTimeAction => ({
    type: '@clock/setTime',
    currentDate: time.toLocaleDateString(),
    currentTime: time.toLocaleTimeString()
})
// 액션이 하나밖에 없는 이유는 Date객체의 메서드를 이용하면 currentDate, currentTime을 얻을수 있기 때문이다.
//payload: "액션의 실행에 필요한 임의의 데이터",