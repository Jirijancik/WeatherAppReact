import React , { Component } from 'react';
import './infoTable.css';

const infoTable = (props) =>{


return(
    <React.Fragment>
             <div className="infoTable">
                <div>{props.infoTableData.day}</div>
                <div>{props.infoTableData.weather} - {props.infoTableData.temperature}</div>
                <div>{props.infoTableData.location}</div>
             </div>
    </React.Fragment>

)
}

export default infoTable; 