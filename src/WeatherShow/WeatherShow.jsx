import React, {Component} from 'react';
import '../WeatherShow/WeatherShow.css'
import AirTemperature from '../AirTemperature/AirTemperature';

export default class WeatherShow extends Component {

    render() {
        if (Array.isArray(this.props.cities)) {
            return (
                this.props.cities.map((item, index)=>{
                    return ( 
                    <div key ={index} className = 'Weather'>
                        <div className = 'city'>
                            <h3>{item}</h3>
                        </div>
                        <div className = 'temp'>
                            <p>Температура:</p>
                            <div className = 'valueTemp'>
                                <AirTemperature city = {item}/>
                            </div>                           
                        </div>
                    </div>
                    )
                })
            )}  
            else
                return null;
    }
}