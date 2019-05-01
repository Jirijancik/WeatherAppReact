import React , { Component } from 'react';
import './sidebarItem.css';

const sidebarItem = (props) =>{


return(
    <React.Fragment>
             <div className="sidebarItem">
                <div>{props.temp}</div>
                <div>{} - {}</div>
                <div>{}</div>
             </div>
    </React.Fragment>

)
}

export default sidebarItem; 