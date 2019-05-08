import React , { Component } from 'react';
import InfoTable from './infoTable';
import './headerTable.css';

const headerTable = (props) =>{


return(
    <React.Fragment>
            
                <img className="headerTable" src={props.img} alt="sunny"></img>
                <InfoTable
                    infoTableData={props.infoTableData} 
                ></InfoTable>
            
    </React.Fragment>

)
}

export default headerTable; 