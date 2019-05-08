import React , { Component } from 'react';
import './infoTable.css';

const infoTable = (props) =>{


return(
    <React.Fragment>
             <div className="infoTable">
                <h1 className="infoTable__header">{props.infoTableData.day} - {props.infoTableData.location}</h1>
             
                <hr className="infoTable__hr"></hr>

                <div className="infoTable__block">
                    <p className="infoTable__block__item">{props.infoTableData.weather}</p>
                    <p className="infoTable__block__item">{props.infoTableData.temperature}</p>
                </div>
             </div>
    </React.Fragment>

)
}

export default infoTable; 