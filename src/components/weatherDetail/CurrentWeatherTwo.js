import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Button from './Button';





export default class CurrentWeatherTwo extends Component {

    state = {
        weather: []
    };

    componentWillMount() {
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=80249,us&mode=json&units=imperial&APPID=36e3c356af81e9b65b59a0df8a0b70e1')
    .then(function(response) {
      return response.json()
    })
    }

    renderWeather() {
        return this
            .state
            .weather
            .map(weather => <Weather key={state.weather.main.temp} weather={temp}/>);
    }

    render() {
        // console.log(this.state.weather.main.temp);


        return (
        <View>
        <Button onPress={() => Linking.openURL(url)}>
                Click for Current Weather
                </Button>
        <Text></Text>

        </View>

        );
    }

}
