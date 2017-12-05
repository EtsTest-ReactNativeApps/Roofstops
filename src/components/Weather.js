import React from 'react';
import { Styles, View, Text, headerTextStyle, Image } from 'react-native';
import CurrentWeather from './weatherDetail/CurrentWeather';
// import CurrentWeatherTwo from './weatherDetail/CurrentWeatherTwo';
import FiveDayWeather from './weatherDetail/FivedayWeather';
import ThreeHourWeather from './weatherDetail/ThreeHourWeather';


export default class Weather extends React.Component {
    render() {
        return (
    
        <View>
        <Text style={headerTextStyle}>New Weather</Text>
        <Image
            style={{width: 200, height: 200}}
          source={{uri: 'http://icons.iconarchive.com/icons/large-icons/large-weather/512/partly-cloudy-day-icon.png'}} />
          <CurrentWeather />
          {/* <CurrentWeatherTwo /> */}
        
        </View>
            
        )
    }
}

const styles = {
    headerTextStyle: {
        fontSize: 80, 
        color: 'red',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
};