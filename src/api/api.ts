import axios from 'axios'
import { WeatherState } from '../redux/reducers/weatherReducerSlice'

const lat = 55.788320
const lon = 37.484946
const appid = 'bde816a9134cfdfb0d91449aba12c8f'

export const weatherApi = {
    getCurrentWeather(cityName?: string) {
        return axios.get<WeatherState>(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bde816a9134cfdfb0d91449aba12c8f8&lang=ru&units=metric`)
            .then(r => r.data)
    },
}