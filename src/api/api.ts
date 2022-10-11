import axios from 'axios'


const appid = 'bde816a9134cfdfb0d91449aba12c8f'

export const weatherApi = {
    getCurrentWeather() {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=55.800595&lon=37.473519&lang=ru&appid=${appid}8&units=metric`)
            .then(r => r.data)
    }
}