import React from 'react';
import { Styles, View, Text, headerTextStyle, Image, centerThings } from 'react-native';
import CurrentWeather from './weatherDetail/CurrentWeather';
// import CurrentWeatherTwo from './weatherDetail/CurrentWeatherTwo';
import FiveDayWeather from './weatherDetail/FivedayWeather';
import ThreeHourWeather from './weatherDetail/ThreeHourWeather';


export default class Weather extends React.Component {
    render() {
        return (  
        <View style={styles.centerThings}>
        <Text style={styles.headerTextStyle}>Current Weather</Text>
          <CurrentWeather />
        </View>
            
        )
    }
}

const styles = {
    headerTextStyle: {
        fontSize: 30, 
        color: '#FFF',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerThings: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
};