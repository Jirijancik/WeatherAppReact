import React , { Component } from 'react';


const infoTable = (props) =>{


return(
    <React.Fragment>
             <div>
                <div>{props.infoTableData.day}</div>
                <div>{props.infoTableData.weather} - {props.infoTableData.temperature}</div>
                <div>{props.infoTableData.location}</div>
             </div>
    </React.Fragment>

)
}

export default infoTable; 