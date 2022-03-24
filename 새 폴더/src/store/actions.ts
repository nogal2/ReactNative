import { Action } from "redux";
import { User } from "./Appstate";

type LogoutAction = Action<'logout'>
type LoginAction = Action<'login'> & {
    loggedUser: User
}

export type LoginActions = LogoutAction | LoginAction

export const loginAction = (loggedUser: User): LoginAction => ({ // 유저 정보가 들어오고 조건에 맞으면 Action타입이 login으로 바뀌면서 로그인됨.
    type: 'login',
    loggedUser    
})

export const logoutAction = (): LogoutAction => ({
    type: 'logout'
})