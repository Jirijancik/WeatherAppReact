import React, { Component } from 'react';
import HeaderTable from './components/headerTable';
import SideBarTable from './components/sideBarTable';
import WeatherInfoTable from './components/weatherInfoTable';
import Sunny from './images/Sunny.jpg';
import Clear from './images/Clear.jpg';
import Clouds from './images/Clouds.jpg';
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
      currentDay: "Loading",
      currentTime: '',
    }
  }



  // Component did mount LifeCycle
  async componentDidMount() {
    this.fetchDataFromAPI('http://api.openweathermap.org/data/2.5/weather?q=Olomouc,CZ&appid=687213f5b48935a3c97e20b678b66451');
  }



  // Function for fetching Data from OpenWeatherApp
  async fetchDataFromAPI(adres) {
    const UNIXTime = Math.round(new Date().getTime() / 1000);
    const _currentTime = this.convertUNIXTimestampToTime(UNIXTime);

    const response = await fetch(adres);
    const data = await response.json();
    this.setState({
      currentInfoTableData: {
        currentDay: "Today",
        weather: data.weather[0].main,
        location: data.name,
        temperature: this.toCelsiusConverter(data.main.temp),
        currentTime: _currentTime
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

    });


    await this.imageChanger(data.weather[0].main);

  }


  // Function for converting temperature to Celsius 
  toCelsiusConverter = (temperature) => Math.round((temperature) - 273.15) + '°C';


  // Function to conert UNIXTimestamp to Time
  convertUNIXTimestampToTime = (input) => {
    var time = new Date(input * 1000);
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }


  // Function for selecting background images according
  // to weather
  imageChanger = (currentWeather) => {
    switch (currentWeather) {
      case "Sunny":
        this.setState({ currentImage: Sunny });
        break;
      case "Clear":
        this.setState({ currentImage: Clear });
        break;
      case "Clouds":
        this.setState({ currentImage: Clouds });
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


  // Function for getting data from sideBar items
  // to main app state
  sidebarItemActivation = (temp, weather, time, day) => {
    this.setState({
      currentInfoTableData: {
        temperature: temp,
        weather: weather,
        currentTime: time,
        currentDay: day
      }
    })
    this.imageChanger(weather);
  }


  // Function for getting data from sideBar items
  // to Weather Info Table state
  weatherInfoTableActivation = (weatherDesc, tempMin, tempMax, wind, pressure, humidity, sunrise, sunset) => {
    this.setState({
      weatherInfoTableData: {
        description: weatherDesc,
        tempMin: this.toCelsiusConverter(tempMin),
        tempMax: this.toCelsiusConverter(tempMax),
        pressure: pressure,
        humidity: humidity + '%',
        wind: wind + ' m/s',
        sunrise: this.convertUNIXTimestampToTime(sunrise) === 'Invalid Date' ? 'N/A' : this.convertUNIXTimestampToTime(sunrise),
        sunset: this.convertUNIXTimestampToTime(sunset) === 'Invalid Date' ? 'N/A' : this.convertUNIXTimestampToTime(sunrise),
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <HeaderTable
          img={this.state.currentImage}
          infoTableData={this.state.currentInfoTableData}
          location={this.state.location}
        ></HeaderTable>

        <WeatherInfoTable
          data={this.state.weatherInfoTableData}
        ></WeatherInfoTable>

        <SideBarTable
          forecastListTable={this.state.forecastListTable}
          propagateinfoTableData={this.sidebarItemActivation}
          propagateInfoWeatherTableData={this.weatherInfoTableActivation}
        ></SideBarTable>
      </React.Fragment>
    )
  }
}

export default App;
