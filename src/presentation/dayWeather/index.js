import React from 'react'
import "./style.css";

function DayWeather({ weather }){
    return (
        <div className = "dayWeather">
            <p>{weather.dt_txt}</p>
            <p>temperature: {weather.temp}</p>
            <p>wind: {weather.wind}</p>
            <p>pressure: {weather.pressure}</p>
        </div>
    )
}

export default DayWeather;