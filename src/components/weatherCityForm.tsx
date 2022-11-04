import {Field, Form, Formik} from 'formik'
import cn from 'classnames'
import s from './weather.module.css'
import {FC, useEffect} from 'react'


const WeatherCityForm: FC<Props> = (props) => {

    const initialValues: InitialValues = {
        cityName: 'Moscow'
    }

    useEffect(() => {
        return () => {
            props.getWeather('Moscow')
        }
    }, [])

    return (
        <div className={cn(s.gridItem, s.gridItemCity)}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({isSubmitting, values, handleChange}) => (
                    <Form>
                        <div className={s.blockSelect}>
                            <Field as="select" name="cityName" onChange={handleChange} className={s.select}>
                                <option className={s.option} value="Moscow" onClick={() => {props.getWeather(values.cityName)}}> Москва </option>
                                <option className={s.option} value="Barnaul" onClick={() => {props.getWeather(values.cityName)}}> Барнаул </option>
                                <option className={s.option} value="Saint Petersburg" onClick={() => {props.getWeather(values.cityName)}}> Санкт-Петербург </option>
                                <option className={s.option} value="Vladivostok" onClick={() => {props.getWeather(values.cityName)}}> Владивосток </option>
                                <option className={s.option} value="Biysk" onClick={() => {props.getWeather(values.cityName)}}> Бийск </option>
                                <option className={s.option} value="Tomsk" onClick={() => {props.getWeather(values.cityName)}}> Томск </option>
                            </Field>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    )
}


type Props = {
    getWeather: (cityName: string) => void
}
type InitialValues = {
    cityName: string
}


export default WeatherCityForm