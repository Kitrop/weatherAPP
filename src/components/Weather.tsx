
import {ThunkDispatch} from '@reduxjs/toolkit'
import {AppStateType} from '../redux/store'
import {WeatherActions, weatherThunk} from '../redux/reducers/weatherReducer'
import { useEffect } from 'react'
import {
    cloudsSelector,
    mainTempSelector,
    nameSelector,
    visibilitySelector,
    weatherMainSelector,
    windSelector
} from '../redux/selectors/selector'
import {useDispatch, useSelector } from 'react-redux'


const Weather = () => {

    // state
    const city = useSelector( (state: AppStateType) => nameSelector(state))
    const weatherMain = useSelector( (state: AppStateType) => weatherMainSelector(state))
    const mainTemp = useSelector( (state: AppStateType) => mainTempSelector(state))
    const visibility = useSelector( (state: AppStateType) => visibilitySelector(state))
    const wind = useSelector( (state: AppStateType) => windSelector(state))
    const clouds = useSelector( (state: AppStateType) => cloudsSelector(state))

    // dispatch
    const dispatch: ThunkDispatch<AppStateType, unknown, WeatherActions> = useDispatch()


    // thunk
    const weatherThunk_ = () => dispatch(weatherThunk())


    useEffect(() => {
        return () => {
            weatherThunk_()
        }
    }, [])



    return (
        <div>
            <div>
                {city}
            </div>
            <div>
                {mainTemp.temp_min}
            </div>
            <div>
                {mainTemp.temp_max}
            </div>
            <div>
                {mainTemp.feels_like}
            </div>





        </div>
    )
}

export default Weather