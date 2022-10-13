import {combineReducers, compose, configureStore} from '@reduxjs/toolkit'
import weatherReducer from './reducers/weatherReducerSlice'

// CombineReducer
let rootReducer = combineReducers({
    weather: weatherReducer
})


// Create store
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

// declarations
// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
//     }
// }


// Types
export type InferActionsTypes<T> = T extends {[keys: string]: (...args: any[]) => infer U} ? U : never
export type RootState = ReturnType<typeof rootReducer>;
export type Appstore = ReturnType<typeof setupStore>
export type AppDispatch = Appstore['dispatch']