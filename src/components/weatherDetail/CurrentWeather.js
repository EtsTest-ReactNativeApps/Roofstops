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
                    temp: 9
                }
            }
        };
    }
    componentWillMount() {
        axios
            .get('https://api.openweathermap.org/data/2.5/weather?zip=80249,us&mode=json&units=imp' +
                'erial&APPID=36e3c356af81e9b65b59a0df8a0b70e1')
            .then(response => this.setState({weather: response.data}));
    }

    renderWeather() {
        return this
            .state
            .weather
            .map(weather => <Weather key={state.weather.main.temp} weather={temp}
            />);
    }

    render() {

        return (
            <View>
                <Text style={styles.weatherDetail}>Current Temperature: {this.state.weather.main.temp}</Text>
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

