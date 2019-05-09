import React, { Component } from 'react';

import SidebarItem from './sidebarItem';
import './sidebarTable.css';
import sidebarItem from './sidebarItem';

class sideBarTable extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            sidebarItemList: "Loading",
            count:0 }

    }

    componentWillReceiveProps(nextProps) {
        const tempConverter = (temperature) => {
            return Math.round((temperature) - 273.15) + '°C'
        };


        let backgroundChanger=()=>{
            let sidebarItems = document.querySelectorAll(".sidebarItem");
            sidebarItems.forEach(sidebarItem =>{

                let timeNum = parseInt(sidebarItem.firstElementChild.textContent.slice(0,2), 10);
             
                (timeNum < 12) ? sidebarItem.style.backgroundColor  = "white" : sidebarItem.style.backgroundColor  = "black";
            }

            )
        } 
      

        const newSidebarItemList = nextProps.forecastListTable.map(item =>
            
            <SidebarItem
                className="sidebarItem"

                temp={tempConverter(item.main.temp)}
                weather={item.weather[0].main}
                time={item.dt_txt.slice(-8)}

                function = {this.props.propagateinfo}


            ></SidebarItem>)


        this.setState({ sidebarItemList: newSidebarItemList });

        backgroundChanger();
    }

    shouldComponentUpdate(nextProps) {
        return this.state.sidebarItemList !== nextProps.newSidebarItemList;
    }







    render() {



        return (

            <div className="sidebarTable" >{this.state.sidebarItemList}</div>

        )
    }

}

export default sideBarTable; 