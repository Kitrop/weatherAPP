import {
    cityNameSelector,
    mainTempSelector,
    visibilitySelector,
    weatherMainSelector,
    windSelector
} from '../redux/selectors/selector'
import s from './weather.module.css'
import cn from 'classnames'
import {useAppDispatch, useAppSelector} from '../redux/hooks/reduxHooks'
import {getWeatherThunk} from '../redux/reducers/weatherReducerSlice'
import styled, {css} from 'styled-components'
import About from './About'
import WeatherCityForm from './weatherCityForm'
import MainInfo from './Main.tsx'

const Weather = () => {

    // state
    const city = useAppSelector(state => cityNameSelector(state))
    const weatherMain = useAppSelector( state => weatherMainSelector(state))
    const mainTemp = useAppSelector( state  => mainTempSelector(state))
    const visibility = useAppSelector( state => visibilitySelector(state))
    const wind = useAppSelector( state => windSelector(state))


    // dispatch
    const dispatch = useAppDispatch()

    const getWeather = (cityName: string) => dispatch(getWeatherThunk(cityName))



    const WeatherWrapper = styled.div`
        ${weatherMain['0'].main === 'Clouds' && css`
          background-image: url(https://data.whicdn.com/images/316906851/original.gif);
          background-size: cover;
        `}
        ${weatherMain['0'].main === 'Rain' && css`
          background-image: url(https://lifeo.ru/wp-content/uploads/gifka-dozhd-18.gif);
          color: #CCCCCC; !important;
          background-size: cover;
        `}
        ${weatherMain['0'].main === 'Snow' && css`
          background-image: url(https://chehov-vid.ru/upload/iblock/5f9/5f9ca006cc54b035f99ddf1636764da5.gif);
          background-size: cover;
        `}        
        ${weatherMain['0'].main === 'Clear' && css`
          background-image: url(https://data.whicdn.com/images/316906851/original.gif);
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
                    <MainInfo mainTemp={mainTemp} weatherMain={weatherMain} city={city}/>
                </WeatherWrapper>
            </div>
            <About visibility={visibility} wind={wind} mainTemp={mainTemp}/>
            <WeatherCityForm getWeather={getWeather}/>
        </div>
    )
}


export default Weather
