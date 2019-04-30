import React , { Component } from 'react';
import './headerTable.css';

const sidebarItem = (props) =>{


return(
    <React.Fragment>
             <div>
                {props.day}
             </div>
    </React.Fragment>

)
}

export default sidebarItem; 