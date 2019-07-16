import React, {Component} from 'react';
import axios from 'axios';

export default class AirTemperature extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFetching: '',
            newTemp:''
        };
    }

    FetchOpenWeather = (cityName) => {
        this.setState({...this.state, isFetching: true})
        const apiKey = 'b6907d289e10d714a6e88b30761fae22';
        axios.get(`http://openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(response => this.setState({newTemp: response.data.main.temp, 
            isFetching: false}))
            .catch(e => console.log(e));
    }

    componentDidMount() {
        this.FetchOpenWeather(this.props.city)
    }
    render() {
        return(
            <div>{this.state.newTemp}</div>
        )
    }
}