import axios from 'axios'

const lat = 55.788320
const lon = 37.484946
const appid = 'bde816a9134cfdfb0d91449aba12c8f'

export const weatherApi = {
    getCurrentWeather() {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&appid=${appid}8&units=metric`)
            .then(r => r.data)
    }
}