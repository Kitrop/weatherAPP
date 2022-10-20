import {ErrorMessage, Field, Form, Formik } from "formik";
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
                onSubmit={(values, { setSubmitting }) => {
                    props.getWeather(values.cityName)
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field as="select" name="cityName">
                            <option value="Moscow">Москва</option>
                            <option value="Barnaul">Барнаул</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
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