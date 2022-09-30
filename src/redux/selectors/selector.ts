import {AppStateType} from '../store'
import {createSelector} from '@reduxjs/toolkit'

// State
const name = (state: AppStateType) => state.weather.name
const weatherMain  = (state: AppStateType) => state.weather.weather
const mainTemp  = (state: AppStateType) => state.weather.main
const visibility  = (state: AppStateType) => state.weather.visibility
const wind  = (state: AppStateType) => state.weather.wind
const clouds  = (state: AppStateType) => state.weather.clouds

// Selectors
export const nameSelector = createSelector([name], (name) => {
    return name
})
export const weatherMainSelector = createSelector([weatherMain], (weatherMain) => {
    return weatherMain
})
export const mainTempSelector = createSelector([mainTemp], (mainTemp) => {
    return mainTemp
})
export const visibilitySelector = createSelector([visibility], (visibility) => {
    return visibility
})
export const windSelector = createSelector([wind], (wind) => {
    return wind
})
export const cloudsSelector = createSelector([clouds], (clouds) => {
    return clouds
})