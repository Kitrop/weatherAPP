import {RootState} from '../store'
import {createSelector} from '@reduxjs/toolkit'

// State
const name = (state: RootState) => state.weather.name
const weatherMain  = (state: RootState) => state.weather.weather
const mainTemp  = (state: RootState) => state.weather.main
const visibility  = (state: RootState) => state.weather.visibility
const wind  = (state: RootState) => state.weather.wind
const clouds  = (state: RootState) => state.weather.clouds

// Selectors
export const cityNameSelector = createSelector([name], (name) => {
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