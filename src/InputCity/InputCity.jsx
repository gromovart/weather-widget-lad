import React, {Component} from 'react';
import '../InputCity/InputCity.css';

export default class InputCity extends Component {
    constructor(props) {
        super()
        this.state = {
            newCity:{
                city: ''
            }
        }
    }

    addCityHandler = () => {
        this.props.newCity(this.state.newCity.city)
    }

    inputCityHandler = (event) => {
        let value = event.target.value;
        this.setState(
            prevState => ({
                newCity: {
                ...prevState.newCity,
                city: value
                }
            })
        );
    };

    render() {
        return (
            <div>
                <div className = 'weather_city'>
                    <div>
                        <h4>В каком городе узнать погоду?</h4>
                        <input onChange = {this.inputCityHandler} placeholder={"Введите название города"} type="text"/>
                        <button onClick = {this.addCityHandler}>Создать виджет</button>
                    </div>
                </div>
            </div>
        )
    }
}