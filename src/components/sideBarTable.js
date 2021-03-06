import React, { Component } from 'react';
import SidebarItem from './sidebarItem';
import './sidebarTable.css';


class sideBarTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sidebarItemList: "Loading",
            newForecastListTable: []
        }
    }


    async componentDidMount() {

        //fetching data from API (Forecast for 40 segments)
        const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=Olomouc,CZ&appid=687213f5b48935a3c97e20b678b66451');
        const data = await response.json();
        this.setState({
            newForecastListTable: data.list
        })
        this.scrollEventListeners();

        // Creating a list of JSX Sidebar Items by maping over Data in newForecastListTable
        const newSidebarItemList = await this.state.newForecastListTable.map(item =>

            <SidebarItem

                item={item}

                temp={tempConverter(item.main.temp)}
                weather={item.weather[0].main}
                time={item.dt}
                propagateinfoTableData={this.props.propagateinfoTableData}
                propagateInfoWeatherTableData={this.props.propagateInfoWeatherTableData}

            ></SidebarItem>
        )

        this.setState({ sidebarItemList: newSidebarItemList });

        function tempConverter(temperature) {
            return Math.round((temperature) - 273.15) + '°C'
        };
    }


    // Function for the sideBarTable scrolling
    scrollEventListeners() {
        const sidebarTable = document.querySelector('.sidebarTable');
        let isDown = false;
        let scrollingSpeed = 1;
        let startX;
        let scrollLeft;

        sidebarTable.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - sidebarTable.offsetLeft;
            scrollLeft = sidebarTable.scrollLeft;
        });
        sidebarTable.addEventListener('mouseup', () => {
            isDown = false;
        });
        sidebarTable.addEventListener('mouseleave', () => {
            isDown = false;
        });
        sidebarTable.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - sidebarTable.offsetLeft;
            const walk = (x - startX) * scrollingSpeed;
            sidebarTable.scrollLeft = scrollLeft - walk;
        });
    }


    render() {

        return (

            <div className="sidebarTable" >{this.state.sidebarItemList}</div>

        )
    }
}

export default sideBarTable; 