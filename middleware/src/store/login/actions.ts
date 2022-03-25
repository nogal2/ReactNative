import { Dispatch } from 'redux'
import type * as T from './types'
import * as U from '../../utils'

export const loginAction = (loggedUser: T.User): T.LoginAction => ({
    type: 'login',
    loggedUser
})

export const logoutAction = (): T.LogoutAction => ({
    type:'logout'
})

export const loggedUserKey = 'loggedUser'

export const signUpAction = (loggedUser: T.User) => (dispatch: Dispatch) => {
    // 서버에서 회원가입을 성공적으로 했다고 가정
    U.writeToStorage(loggedUserKey, JSON.stringify(loggedUser))
        .then(() => {
            dispatch(loginAction(loggedUser))
        })
        .catch((e) => {
            dispatch(loginAction(loggedUser))
        })
    // loggedUser라는 키에 loggedUser 객체를 JSON.stringify 함수를 사용하여
    // JSON 문자열로 변환하여 저장한 다음 정상적인 리덕스 코드를 실행하는 방식.
}