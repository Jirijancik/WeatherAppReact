import React from 'react';
import './weatherInfoTable.css';

const weatherInfoTable = (props) => {

    return (

        <div className="weatherInfoTable">
            <div className="wetherInfoCell">Weather: {props.data.description}</div>
            <div className="wetherInfoCell">Temperature: {props.data.tempMin} - {props.data.tempMax}</div>
            <div className="wetherInfoCell">Wind: {props.data.wind}</div>
            <div className="wetherInfoCell">Pressure: {props.data.pressure}</div>
            <div className="wetherInfoCell">Humidity: {props.data.humidity}</div>
            <div className="wetherInfoCell">Sunrise: {props.data.sunrise} | Sunset: {props.data.sunset}</div>
        </div>

    )
}

export default weatherInfoTable; 