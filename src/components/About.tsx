import cn from 'classnames'
import s from './weather.module.css'
import {
    ArrowDown, ArrowDownLeft,
    ArrowDownRight,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    ArrowUpLeft,
    ArrowUpRight
} from 'react-bootstrap-icons'
import {FC} from 'react'
import {Main, Wind} from '../redux/types'


interface Props {
    visibility: number,
    wind: Wind,
    mainTemp: Main
}


const About: FC<Props> = (props) => {
    return (
        <div className={cn(s.gridItem, s.gridItemAbout)}>
            <div className={cn(s.windHeader)}>
                Ветер
            </div>
            <div className={cn(s.mainFont, s.windTxt)}>
                {props.wind.speed} м/c
            </div>
            <div className={cn(s.mainFont, s.windTxt)}>
                Направление ветра:  <span> </span>
                { props.wind.deg >= 335 || props.wind.deg <= 25 ? <span><ArrowLeft/> Западное</span> : null}
                { 26 <= props.wind.deg && props.wind.deg <= 70 ? <span><ArrowUpLeft/> Северо-Запад</span>  : null}
                { 71 <= props.wind.deg && props.wind.deg <= 115 ? <span><ArrowUp/> Северное</span>  : null}
                { 116 <= props.wind.deg && props.wind.deg <= 160 ? <span><ArrowUpRight/> Северо-Восточное</span>  : null}
                { 161 <= props.wind.deg && props.wind.deg <= 205 ? <span><ArrowRight/> Восточное</span>  : null}
                { 206 <= props.wind.deg && props.wind.deg <= 250 ? <span><ArrowDownRight/> Юго-Восточное </span>  : null}
                { 251 <= props.wind.deg && props.wind.deg <= 295 ? <span><ArrowDown/> Южное</span>  : null}
                { 296 <= props.wind.deg && props.wind.deg <= 339 ? <span><ArrowDownLeft /> Юго-Западное</span>  : null}
            </div>
            <div className={cn(s.mainFont, s.windTxt)}>
                <div>
                    Видимость: {props.visibility /1000}км
                </div>
                <div>
                    Влажность: {props.mainTemp.humidity} %
                </div>
            </div>
        </div>
    )
}

export default About