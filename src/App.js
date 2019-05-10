import React, { Component } from 'react';
import HeaderTable from './components/headerTable';
import SideBarTable from './components/sideBarTable';
import Sunny from './images/Sunny.jpg';
import Clear from './images/Clear.jpg';
import Drizzle from './images/Drizzle.jpg';
import Rain from './images/Rain.jpg';
import Tuhnderstorm from './images/Thunderstorm.jpg';



class App extends Component {

  constructor() {
    super();
    this.state = {
      location:"Olomouc",
      currentInfoTableData: {
        
      },
      currentImage: "Loading",
      forecastListTable: [],


    }
  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Olomouc,CZ&appid=aa794bac773a44c2e0248797cec961b0')
      .then(response => response.json())
      .then(data => new Promise((resolve, reject) => {
        this.setState({
          currentInfoTableData: {
            day: "Dnes",
            weather: data.weather[0].main,
            temperature: Math.round((data.main.temp) - 273.15) + '°C',
            location: data.name
          }
        });
        resolve(data);
      })
      )
      .then(data => this.imageChanger(data.weather[0].main));

    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Olomouc,CZ&appid=aa794bac773a44c2e0248797cec961b0')
      .then(response => response.json())
      .then(data => this.setState({
        forecastListTable: data.list.slice(0, 20)
      }))
      .then(this.scrollEventListeners());
  }


  scrollEventListeners() {
    const sidebarTable = document.querySelector('.sidebarTable');
    let isDown = false;
    let scrollingSpeed = 0.7;
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


  imageChanger = (currentWeather) => {


    switch (currentWeather) {
      case "Sunny":
        this.setState({ currentImage: Sunny });
        break;
      case "Clear":
        this.setState({ currentImage: Clear });
        break;
      case "Drizzle":
        this.setState({ currentImage: Drizzle });
        break;
      case "Rain":
        this.setState({ currentImage: Rain });
        break;
      case "Tuhnderstorm":
        this.setState({ currentImage: Tuhnderstorm });
        break;
      default: this.setState({ currentImage: Clear });

    }
  }


  sidebarItemActivation = (temp, weather, time) => {
      this.setState(
        {
          currentInfoTableData: {
            day: time,
            weather: weather,
            temperature: temp,
          }
        }
      )
      this.imageChanger(weather);
  }

  render() {
    return (
      <React.Fragment>
        <HeaderTable
          img={this.state.currentImage}
          infoTableData={this.state.currentInfoTableData}
          location = {this.state.location}
        ></HeaderTable>

        <SideBarTable
          forecastListTable={this.state.forecastListTable}
          propagateinfo = {this.sidebarItemActivation}
        ></SideBarTable>
      </React.Fragment>
    )
  }
}

export default App;
