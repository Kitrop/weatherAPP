import React from 'react'
import './App.css'
import Weather from './components/Weather'
import weatherReducerSlice from './redux/reducers/weatherReducerSlice'
function App() {
    return (
        <div className="App">
            <Weather />
        </div>
    )
}

export default App
