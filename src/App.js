import React, { Component } from 'react';
import HeaderTable from './components/headerTable';
import SideBarTable from './components/sideBarTable';
import WeatherInfoTable from './components/weatherInfoTable';
import Sunny from './images/Sunny.jpg';
import Clear from './images/Clear.jpg';
import Drizzle from './images/Drizzle.jpg';
import Rain from './images/Rain.jpg';
import Tuhnderstorm from './images/Thunderstorm.jpg';



class App extends Component {

  constructor() {
    super();
    this.state = {
      location: "Olomouc",
      currentInfoTableData: {},
      weatherInfoTableData: {},
      currentImage: "Loading",
      forecastListTable: [],
      currentTime:'',

    }
  }

  componentDidMount() {
    const UNIXTime = Math.round(new Date().getTime()/1000);
    const _currentTime = this.convertUNIXTimestampToTime(UNIXTime);

    fetch('http://api.openweathermap.org/data/2.5/weather?q=Olomouc,CZ&appid=aa794bac773a44c2e0248797cec961b0')
      .then(response => response.json())
      .then(data => new Promise((resolve, reject) => {
        this.setState({
          currentInfoTableData: {
            day: "Dnes",
            weather: data.weather[0].main,
            location: data.name,
            temperature: this.toCelsiusConverter(data.main.temp),
          },
          weatherInfoTableData: {
            description: data.weather[0].description,
            tempMin: this.toCelsiusConverter(data.main.temp_min),
            tempMax: this.toCelsiusConverter(data.main.temp_max),
            pressure: data.main.pressure,
            humidity: data.main.humidity + '%',
            wind: data.wind.speed + ' m/s',
            sunrise: this.convertUNIXTimestampToTime(data.sys.sunrise),
            sunset: this.convertUNIXTimestampToTime(data.sys.sunset),
          },
          currentTime:_currentTime
        });

        resolve(data);
      })
      )
      .then(data => this.imageChanger(data.weather[0].main));

      
  }





  toCelsiusConverter = (temperature) => Math.round((temperature) - 273.15) + '°C';





  convertUNIXTimestampToTime = (input) => {
    var time = new Date(input * 1000);
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
    this.setState({
        currentInfoTableData: {
          temperature: temp,
          weather: weather,
          day: time,
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
          location={this.state.location}
          time={this.state.currentTime}
        ></HeaderTable>

        <WeatherInfoTable data={this.state.weatherInfoTableData}></WeatherInfoTable>

        <SideBarTable
          forecastListTable={this.state.forecastListTable}
          propagateinfo={this.sidebarItemActivation}
        ></SideBarTable>
      </React.Fragment>
    )
  }
}

export default App;
