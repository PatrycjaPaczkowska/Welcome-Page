// In this section I want to show:
// 1. How I use Fetch and Api from external source
// 2. How I use class component

import React from 'react';
import Panel from './subcomponents/Panel';
import Result from './subcomponents/Result';
//STYLES
import { WeatherContainer } from './WeatherStyle';

class Weather extends React.Component {
   state = {
      value: 'Gdańsk',
      date: '',
      city: '',
      temp: '',
      pressure: '',
      description: '',
      icon: '',
      err: false
   }

   //This function get value of input from Panel and updates it
   handleChange = (e) => {
      this.setState({
         value: e.target.value
      })
   }

   //This function takes data from the API and updates it to the state
   handleCitySubmit = (e) => {
      e.preventDefault();

      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=18f98bc06a77ed2738d2bfedb5913448&units=metric`;

      fetch(API)
         .then(res => {
            if (res.ok) {
               return res
            }
            throw Error("Nie udało się")
         })
         .then(res => res.json())
         .then(data => {
            const time = new Date().toLocaleDateString();

            this.setState(state => ({
               err: false,
               date: time,
               city: data.name,
               temp: data.main.temp,
               pressure: data.main.pressure,
               description: data.weather[0].description,
               icon: data.weather[0].icon,
            }))
         })
         .catch(err => {
            console.log(err);
            this.setState(state => ({
               err: true,
               city: state.value
            }))
         });

   }

   render() {
      return (
         <WeatherContainer>
            {this.state.city ? null : <Panel
               city={this.state.value}
               handleChange={this.handleChange}
               handleSubmit={this.handleCitySubmit}
            />}
            <Result {...this.state} />
         </WeatherContainer>
      );
   }
}

//STYLES



export default Weather;