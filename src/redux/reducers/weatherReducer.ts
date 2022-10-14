import {InferActionsTypes, RootState} from '../store'
import {weatherApi} from '../../api/api'
import {ThunkDispatch} from '@reduxjs/toolkit'

// State
let initialState = {
    weather: {
        0: {
            id: 0,
            main: '',
            description: '',
            icon: ''
        }
    },
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
    },
    visibility: 0,
    wind: {
        speed: 0,
        deg: 0,
        gust: 0
    },
    clouds: {
        all: 0
    },
    name: ''
}


// Reducer
const weatherReducer = (state = initialState, action: WeatherActions) => {
    switch (action.type) {
        case 'GET_WEATHER': {
            return {...state, ...action.data}
        }
        default: return state
    }
}

// ActionCreator
const weatherActions = {
    getWeather: (tom: InitialStateType) => ({type: 'GET_WEATHER', data: tom} as const)
}

// thunkCreator
const weatherThunk = () => async (dispatch: ThunkDispatch<RootState, unknown, WeatherActions>) => {
     let data = await weatherApi.getCurrentWeather()
    dispatch(weatherActions.getWeather(data))
}








// Types
export type WeatherActions = InferActionsTypes<typeof weatherActions>
type InitialStateType = typeof initialState
