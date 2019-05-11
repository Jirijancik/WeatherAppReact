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
        
return(
    <React.Fragment>
      


        <div className={isGreaterThan12(props.time)? "sidebarItem night" : "sidebarItem day"}

        onDoubleClick={() => props.function(props.temp,props.weather,props.time)}

        >

            <p className="sidebarItem__time">{convertUNIXTimestampToTime(props.time)}</p>
            <p className="sidebarItem__temp">{props.temp}</p>
            <p className="sidebarItem__weather">{props.weather}</p>

         </div>
     

    </React.Fragment>

)
}

export default sidebarItem; 