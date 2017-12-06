import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, weatherDetail } from 'react-native';
import Button from './Button';
import axios from 'axios';

export default class CurrentWeather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: {

                main: {
                    temp: 'Updating...',
                    description: 'Desc'
                }
            }
        };
    }
    componentWillMount() {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?zip=${this.props.zip},us&mode=json&units=imperial&APPID=36e3c356af81e9b65b59a0df8a0b70e1`)
            .then(response => this.setState({weather: response.data}));
    }

    renderWeather() {
        return this
            .state
            .weather
            .map(weather => <Weather key={state.weather.main.temp} weather={temp}
            />);
    }
    renderWeatherDescription() {
        return this
            .state
            .weather
            .map(weather => <Weather key={state.weather.weather.description} weather={icon}
            />);
    }
    render() {
        console.log(this.state.weather)
        return (
            <View>
                <Text style={styles.weatherDetail}>
                  {/* Current Temperature:  */}
                  {(+this.state.weather.main.temp).toFixed()} &#8457;</Text>
                {/* <Text style={styles.weatherDetail}>
                Clear Skys
                </Text>
                <Text style={styles.weatherDetail}>
            Icon will go here {this.state.weather.main.icon}
            </Text> */}

            </View>

        );
    }
}


const styles = {
    weatherDetail: {
        fontSize: 20,
        color: '#FFF',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
};
