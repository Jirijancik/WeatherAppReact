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


        const newSidebarItemList = nextProps.forecastListTable.map(item =>
            
            <SidebarItem
                

                temp={tempConverter(item.main.temp)}
                weather={item.weather[0].main}
                time={item.dt_txt} 
                function = {this.props.propagateinfo}
                

            ></SidebarItem>)


        this.setState({ sidebarItemList: newSidebarItemList });

        
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