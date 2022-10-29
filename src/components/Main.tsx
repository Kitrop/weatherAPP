import cn from 'classnames'
import s from './weather.module.css'
import {FC} from 'react'
import {Main, Weather} from '../redux/types'


const MainInfo: FC<Props> = ({mainTemp, weatherMain, city, }) => {
    return (
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
    )
}

export default MainInfo

type Props = {
        mainTemp: Main,
        weatherMain: Weather,
        city: string
}