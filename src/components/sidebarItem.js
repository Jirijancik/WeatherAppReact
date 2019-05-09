import React from 'react';
import './sidebarItem.css';

const sidebarItem = (props) =>{


return(
    <React.Fragment>
      


        <div className="sidebarItem" 
        onDoubleClick={props.function}

        >

            <p className="sidebarItem__time">{props.time}</p>
            <p className="sidebarItem__temp">{props.temp}</p>
            <p className="sidebarItem__weather">{props.weather}</p>

         </div>
     

    </React.Fragment>

)
}

export default sidebarItem; 