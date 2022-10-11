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
import s from './weather.module.css'
import cn from 'classnames'
import {
    ArrowDown,
    ArrowDownLeft,
    ArrowDownRight,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    ArrowUpLeft, ArrowUpRight
} from 'react-bootstrap-icons'


const Weather = () => {

    // state
    const city = useSelector( (state: AppStateType) => nameSelector(state))
    const weatherMain = useSelector( (state: AppStateType) => weatherMainSelector(state))
    const mainTemp = useSelector( (state: AppStateType) => mainTempSelector(state))
    const visibility = useSelector( (state: AppStateType) => visibilitySelector(state))
    const wind = useSelector( (state: AppStateType) => windSelector(state))

    // dispatch
    const dispatch: ThunkDispatch<AppStateType, unknown, WeatherActions> = useDispatch()


    // thunk
    const weatherThunk_ = () => dispatch(weatherThunk())


    useEffect(() => {
        return () => {
            weatherThunk_()
        }
    }, [])


    // s.grid-item s.grid-item-main
    return (
        <div className={s.grid}>
            <div className={s.gridItemMain}>
                <div className={cn(s.gridItemMain)}>
                    <div className={cn(s.mainTemp, s.mainFont)}>
                        {Math.round(mainTemp.temp)}°C
                    </div>
                    <div className={cn(s.mainCity, s.mainFont)}>
                        {city}
                    </div>
                    <div className={cn(s.mainDescription, s.mainFont)}>
                        На улице {weatherMain['0'].description}
                    </div>
                    <div className={cn(s.mainFeelLikes, s.mainFont)}>
                        Ощущается как {Math.round(mainTemp.feels_like)}°C
                    </div>
                    <div className={cn(s.mainMaxMin, s.mainFont)}>
                        {Math.round(mainTemp.temp_min)}°C/{Math.round(mainTemp.temp_max)}°C
                    </div>
                </div>
            </div>
            <div className={cn(s.gridItem, s.gridItemAbout)}>
                <div className={cn(s.windHeader)}>
                    Ветер
                </div>
                <div className={cn(s.mainFont, s.windTxt)}>
                    {wind.speed} м/c
                </div>
                <div className={cn(s.mainFont, s.windTxt)}>
                    Направление ветра:  <span> </span>
                    { wind.deg >= 335 || wind.deg <= 25 ? <span><ArrowLeft/> Западное</span> : null}
                    { 26 <= wind.deg && wind.deg <= 70 ? <span><ArrowUpLeft/> Северо-Запад</span>  : null}
                    { 71 <= wind.deg && wind.deg <= 115 ? <span><ArrowUp/> Северное</span>  : null}
                    { 116 <= wind.deg && wind.deg <= 160 ? <span><ArrowUpRight/> Северо-Восточное</span>  : null}
                    { 161 <= wind.deg && wind.deg <= 205 ? <span><ArrowRight/> Восточное</span>  : null}
                    { 206 <= wind.deg && wind.deg <= 250 ? <span><ArrowDownRight/> Юго-Восточное </span>  : null}
                    { 251 <= wind.deg && wind.deg <= 295 ? <span><ArrowDown/> Южное</span>  : null}
                    { 296 <= wind.deg && wind.deg <= 339 ? <span><ArrowDownLeft /> Юго-Западное</span>  : null}
                </div>
                <div className={cn(s.mainFont, s.windTxt)}>
                    <div>
                        Видимость: {visibility /1000}км
                    </div>
                    <div>
                        Влажность: {mainTemp.humidity}%
                    </div>
                </div>
            </div>
            <div className={cn(s.gridItem, s.gridItemCity)}>Город</div>
        </div>
    )
}


export default Weather