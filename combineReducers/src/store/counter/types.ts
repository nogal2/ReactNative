import {Action} from 'redux'

export type State = number

export type IncreaseAction = Action<'@counter/increase'>
export type DecreaseAction = Action<'@counter/decrease'>

export type Actions = IncreaseAction | DecreaseAction

/* 
rootreducer 에서 combineReducers에 여러 reducer들을 넣어놨다. 리덕스는 어떤 액션이 dispatch되면 
combineReducers에 등록된 모든 리듀서에 이 액션을 보낸다.  즉, L.LoginAction 등이 dispatch 되면 L.reducer에만 보내는 것이 아니라, C.reducer등
모든 reducer에도 보낸다. 이때 액션의 타입의 이름이 'increase와 같이 매우 일반적이라면 이름 충돌이 발생할 수 있다. 그래서 이 충돌name collision을 막고자
@액션의_범주/액션이_해야할_일 형태로 액션의 타입을 선언한다.
*/