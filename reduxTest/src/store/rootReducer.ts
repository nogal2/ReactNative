import { LoginActions } from "./actions";
import { AppState } from "./Appstate";

// 로그인 정보 초기화
const initialState: AppState = {
    loggedIn: false,
    loggedUser: {email: '', name: '', password:''}
}

// 로그인 정보 담기(과거 상태previous state를 그대로 현재 상태current state로 반환. 로그인을 initialState 상태로 유지.)
export const rootReducer = (
    state:AppState = initialState, 
    action: LoginActions) => {
    
    switch(action.type) {
        case 'login': return {...state, loggedUser: action.loggedUser, loggedIn: true}
         // ...state 는 새로운 멤버 추가가 있을 경우를 대비하기 위함.
        case 'logout': return initialState
    }

    return state
}