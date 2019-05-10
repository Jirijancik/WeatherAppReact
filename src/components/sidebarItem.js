import React from 'react';
import './sidebarItem.css';

const sidebarItem = (props) =>{

    let isGreaterThan12=time=> {
        const hours = new Date(time).getHours();
        return hours >19 || hours <5;}

    let getHours = (time) => {
        let SidebarItemTime = time.slice(-8);
        
        return SidebarItemTime;
    }

return(
    <React.Fragment>
      


        <div className={isGreaterThan12(props.time)? "sidebarItem night" : "sidebarItem day"}

        onDoubleClick={() => props.function(props.temp,props.weather,props.time)}

        >

            <p className="sidebarItem__time">{getHours(props.time)}</p>
            <p className="sidebarItem__temp">{props.temp}</p>
            <p className="sidebarItem__weather">{props.weather}</p>

         </div>
     

    </React.Fragment>

)
}

export default sidebarItem; 