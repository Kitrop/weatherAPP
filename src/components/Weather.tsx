import {weatherThunk} from '../redux/reducers/weatherReducer'
import {useEffect} from 'react'
import {
    cityNameSelector,
    mainTempSelector,
    visibilitySelector,
    weatherMainSelector,
    windSelector
} from '../redux/selectors/selector'
import s from './weather.module.css'
import cn from 'classnames'
import {
    ArrowDown,
    ArrowDownLeft,
    ArrowDownRight,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    ArrowUpLeft,
    ArrowUpRight
} from 'react-bootstrap-icons'
import {useAppDispatch, useAppSelector} from '../redux/hooks/reduxHooks'
import {getWeatherThunk, weatherSlice} from '../redux/reducers/weatherReducerSlice'


const Weather = () => {


    // state
    const city = useAppSelector(state => cityNameSelector(state))
    const weatherMain = useAppSelector( state => weatherMainSelector(state))
    const mainTemp = useAppSelector( state  => mainTempSelector(state))
    const visibility = useAppSelector( state => visibilitySelector(state))
    const wind = useAppSelector( state => windSelector(state))

    const what = useAppSelector(state => state.weather.main.humidity)

    // dispatch
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getWeatherThunk())
    }, [])



    return (
        <div className={s.grid}>
            {what}
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
            <div className={cn(s.gridItem, s.gridItemCity)}>
                Город
            </div>
        </div>
    )
}


export default Weather