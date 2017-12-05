import React from 'react';
import { Styles, View, Text, headerTextStyle, Image } from 'react-native';
import CurrentWeather from './weatherDetail/CurrentWeather';
import FiveDayWeather from './weatherDetail/FivedayWeather';
import ThreeHourWeather from './weatherDetail/ThreeHourWeather';


export default class Weather extends React.Component {
    render() {
        return (
        <View>
        <Text style={headerTextStyle}>Weather</Text>
        <Image
            style={{width: 200, height: 200}}
          source={{uri: 'http://images.clipartpanda.com/sun-clipart-Transparent-sun-with-shades-clipart-picture-5.png'}} />
        
        </View>
            
        )
    }
}

const styles = {
    headerTextStyle: {
        fontSize: 60, 
        color: 'red'
    }
};