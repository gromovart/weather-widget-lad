import React, {Component} from 'react';
import Wrapper from './Wrapper/Wrapper';
import WeatherShow from './WeatherShow/WeatherShow'
import InputCity from './InputCity/InputCity'


export default class App extends Component {

  constructor(props) {
    super()
    this.state = {
      cities: ''
    }
  }

  newCity = (userCity)=>{
    this.setState(prevState => ({
        cities: [
          ...prevState.cities, userCity
          ]
    }),
    () => console.log(this.state.cities))
  }

  render() {
    return (
      <Wrapper>
        <WeatherShow className = 'mainWrap' cities = {this.state.cities}/>
        <InputCity newCity = {this.newCity}/>
      </Wrapper>
    )
  }
}