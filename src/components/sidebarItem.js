import React from 'react';
import './sidebarItem.css';

const sidebarItem = (props) =>{

    let isGreaterThan12=time=> {
        const hours = convertUNIXTimestampToTime(props.time);
        let x = parseInt(hours.slice(0,2));
        return x > 19 || x <5;
    }

    const convertUNIXTimestampToTime = (input) => {
            var time = new Date(input * 1000);
            return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    const convertUNIXTimestampToDay = (input) => {
        let time = new Date(input * 1000);
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[time.getDay()];
    }

    const onDoubleClick = (event) => {
        props.propagateinfoTableData(props.temp,props.weather,convertUNIXTimestampToTime(props.time), convertUNIXTimestampToDay(props.time));
        props.propagateInfoWeatherTableData(props.item.weather[0].description, props.item.main.temp_min, props.item.main.temp_max, props.item.wind.speed, props.item.main.pressure, props.item.main.humidity, props.item.sys.sunrise, props.item.sys.sunset);
     }

        
return(
    <React.Fragment>
      


        <div className={isGreaterThan12(props.time)? "sidebarItem night" : "sidebarItem day"}

        onDoubleClick={() => onDoubleClick()}

        >

            <p className="sidebarItem__time">{convertUNIXTimestampToDay(props.time)}</p>
            <p className="sidebarItem__time">{convertUNIXTimestampToTime(props.time)}</p>
            <p className="sidebarItem__temp">{props.weather} - {props.temp}</p>
         </div>
     

    </React.Fragment>

)
}

export default sidebarItem; 