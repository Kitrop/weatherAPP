import {InferActionsTypes, RootState} from '../store'
import {weatherApi} from '../../api/api'
import {createAsyncThunk, createSlice, PayloadAction, ThunkDispatch} from '@reduxjs/toolkit'
import {Main, Weather, Wind} from '../types'
import axios from 'axios'

// State
let initialState: WeatherState = {
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





export const getWeatherThunk = createAsyncThunk(
    'weather/getWeather',
    async (cityName: string = 'Moscow') => {
        const response = await weatherApi.getCurrentWeather(cityName)
        return response
    }
)



// Reducer
export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: {
        [getWeatherThunk.fulfilled.type]: (state, action: any) => {
            state.main = action.payload.main
            state.weather = action.payload.weather
            state.visibility = action.payload.visibility
            state.wind = action.payload.wind
            state.name = action.payload.name
        },
    }
})




export default weatherSlice.reducer

// Types
export interface WeatherState {
    weather: Weather
    main: Main
    visibility: number
    wind: Wind
    clouds: {
        all: number
    }
    name: string
}

