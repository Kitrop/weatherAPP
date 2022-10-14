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
import {getWeatherThunk} from '../redux/reducers/weatherReducerSlice'
import styled, { css } from 'styled-components'


const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  margin-left: 4vw;
  margin-right: 4vw;
  margin-top: 3vh;
  grid-template-areas:
      "main"
      "about"
      "city";
`




const Weather = () => {


    // state
    const city = useAppSelector(state => cityNameSelector(state))
    const weatherMain = useAppSelector( state => weatherMainSelector(state))
    const mainTemp = useAppSelector( state  => mainTempSelector(state))
    const visibility = useAppSelector( state => visibilitySelector(state))
    const wind = useAppSelector( state => windSelector(state))

    // dispatch
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getWeatherThunk())
    }, [])


    const WeatherWrapper = styled.div`
        ${weatherMain['0'].main === 'Clouds' && css`
          background-image: url(https://data.whicdn.com/images/316906851/original.gif);
          background-size: cover;
        `}
        ${weatherMain['0'].main === 'Rain' && css`
          background-image: url(https://lifeo.ru/wp-content/uploads/gifka-dozhd-18.gif);
          background-size: cover;
        `}
        ${weatherMain['0'].main === 'Snow' && css`
          background-image: url(https://chehov-vid.ru/upload/iblock/5f9/5f9ca006cc54b035f99ddf1636764da5.gif);
          background-size: cover;
        `}
        ${weatherMain['0'].main === 'Thunderstorm' && css`
          background-image: url(https://i.gifer.com/7TDQ.gif);
          background-size: cover;
        `}
        ${weatherMain['0'].main === 'Drizzle' && css`
          background-image: url(https://s02.yapfiles.ru/files/2581434/original.gif);
          background-size: cover;
        `}
        ${weatherMain['0'].main === 'Extreme' && css`
          background-image: url(https://thumbs.gfycat.com/AchingInformalHypacrosaurus-size_restricted.gif);
          background-size: cover;
        `}
    `

    return (
        <div className={s.grid}>
            <div className={s.gridItemMain}>
                <WeatherWrapper>
                    <div className={cn(s.gridItemMain, )}>
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
                </WeatherWrapper>

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