import React , { Component } from 'react';
import HeaderTable from './components/headerTable';
import SideBarTable from './components/sideBarTable';
import image1 from './images/sunny.png';


class App extends React.Component {

constructor(){
  super();
  this.state={
    infoTableData:{
      day:"DNES",
      weather:"SLUNEČNO",
      temperature:"25C",
      location:"OLOMOUC"
    }
  }
}

componentDidMount() {
  console.log("seeee");
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Olomouc,CZ&appid=aa794bac773a44c2e0248797cec961b0')
    .then(response => response.json())
    .then(data => this.setState({ 
      infoTableData:{
        day: "Dnes",
        weather: data.weather[0].main,
        temperature:Math.round((data.main.temp) - 273.15)+'°C',
        location:data.name
      }

      
    }));

    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Olomouc,CZ&appid=aa794bac773a44c2e0248797cec961b0')
    .then(response => response.json())
    .then(data => console.log);

}


  render(){
    return(
      <React.Fragment>
        <HeaderTable 
        img={image1}
        infoTableData={this.state.infoTableData}
        ></HeaderTable>
        <SideBarTable></SideBarTable>
      </React.Fragment>
    )
  }
}

export default App;
