import { applyMiddleware, createStore } from "redux"
import { logger } from "./logger"
import { rootReducer } from "./rootReducer"
import thunk from 'redux-thunk'

export const makeStore = () => {
    let middlewares: any[] = [thunk]
    if (__DEV__) {  // 개발 모드일 때만 logger 미들웨어를 적용
        middlewares.push(logger)
    }
    
    return createStore(rootReducer, applyMiddleware(...middlewares))
}