import React, { Component } from 'react';

import SidebarItem from './sidebarItem';
import './sidebarTable.css';

class sideBarTable extends Component{

constructor(props){
    super(props)
    this.state = {sidebarItemList : "Loading"}
}


componentWillReceiveProps(nextProps) {
    function tempConverter(temperature) {
        return Math.round((temperature) - 273.15)+'°C'
    };
    const newSidebarItemList = nextProps.forecastListTable.map(item => 
    <SidebarItem 
    className="sidebarItem" 

    temp={tempConverter(item.main.temp)} 
    weather = {item.weather[0].main}
    time = {item.dt_txt.slice(-8)} 

    ></SidebarItem>)
    this.setState({sidebarItemList: newSidebarItemList});
}

shouldComponentUpdate(nextProps) {
    return this.state.sidebarItemList !== nextProps.newSidebarItemList;
}






    render(){

        

        return(
            
            <div className="sidebarTable" >{this.state.sidebarItemList}</div>

        )
    }

}

export default sideBarTable; 