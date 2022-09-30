import axios from 'axios'


export const weatherApi = {
    getCurrentWeather() {
        return axios.get('https://api.openweathermap.org/data/2.5/weather?lat=55.755826&lon=37.6173&appid=bde816a9134cfdfb0d91449aba12c8f8&units=metric')
            .then(r => r.data)
    }
}