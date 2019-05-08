import React , { Component } from 'react';
import './sidebarItem.css';

const sidebarItem = (props) =>{


return(
    <React.Fragment>
      
        <div className="sidebarItem">

            <p className="sidebarItem__time">{props.time}</p>
            <p className="sidebarItem__temp">{props.temp}</p>
            <p className="sidebarItem__weather">{props.weather}</p>

         </div>
     

    </React.Fragment>

)
}

export default sidebarItem; 