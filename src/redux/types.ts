import * as module from 'module'

export interface  Weather {
    0: {
        id: number
        main: string
        description: string
        icon: string
    }
}

export interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
}

export interface Wind {
        speed: number
        deg:number
        gust: number
}