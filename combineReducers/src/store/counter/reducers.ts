import * as T from './types'

const initialState: T.State = 0

// state는 AppState의 counter 속성
export const reducer = (state: T.State = initialState, action: T.Actions) => {
    switch(action.type) {
        case '@counter/increase':
            return state +1
        case '@counter/decrease':
            return state -1
    }
    return state // 이게 필요한 이유는 아래
}

/* 
    리덕스는 액션을 모든 리듀서에 보내면서 반드시 다음 상태next state를 수신한다는 방식으로 구현한다.
    즉, 타입 관점에서 리덕스는 리듀서가 다음과 같은 타입의 함수라고 생각한다.
    type Reducer = <State, Action>(state: State, action:Action) => State
    그런데 리듀서에서 12행을 생략하면 해당 리듀서는 자신이 처리하지 않은 액션에 대해서는 상태를 반환하지 않으므로
    타입 관점에서는 다음처럼 State 혹은 underfined 타입을 반환하는 함수가 되어 버리므로 리덕스의 설계 원칙을 위반하게 된다.

    상태를 반환하지 않을 수 있는 리듀서 타입
    type Reducer = <State, Action>(state: State, action:Action) => Sate | undefined
*/