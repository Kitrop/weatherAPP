import {applyMiddleware, combineReducers, compose} from '@reduxjs/toolkit'
import weatherReducer from './reducers/weatherReducer'
import { createStore } from 'redux'
import thunk from 'redux-thunk'

// CombineReducer
let rootReducer = combineReducers({
    weather: weatherReducer
})


// Create store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


// declarations
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

// @ts-ignore
window.store = store

export default store

// Types
export type InferActionsTypes<T> = T extends {[keys: string]: (...args: any[]) => infer U} ? U : never
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>