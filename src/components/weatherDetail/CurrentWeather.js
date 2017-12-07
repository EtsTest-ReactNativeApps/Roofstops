import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, weatherDetail} from 'react-native';
import Button from './Button';
import axios from 'axios';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

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
            .map(weather => <Weather key={state.weather.main.temp} weather={temp}/>);
    }
    render() {
        return (
            <View>
                <Text style={styles.weatherDetail}>
                    {(+ this.state.weather.main.temp).toFixed()}
                    &#8457;</Text>
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
        alignItems: 'center'
    }
};
