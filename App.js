import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import LandingSearch from './src/components/LandingSearch';
import Rooftops from './src/components/Rooftops';
import Weather from './src/components/Weather';
// import Analytics from './src/components/Analytics'; Will include this back in when google analytics updates

import Navi from './src/components/Navi';
import Header from './src/components/Header';


export default class App extends React.Component {
  constructor(){
    super()

    this.state = {gotoRoofstops: false, removeSearch: true, weatherComponent: false}
  }

gotoRoofstops = () => {
  this.setState({gotoRoofstops: true, removeSearch: false , weatherComponent: true})

}

  render() {
    return (

          <View style={styles.container}>
            <ScrollView>
              <Header />
              {
                this.state.gotoRoofstops ? <Rooftops /> : null
              }           
              {
                this.state.removeSearch ? <LandingSearch gotoRoofstops = {this.gotoRoofstops}/> :  null
              }
              {
                this.state.weatherComponent ? <Weather /> : null
              }

            </ScrollView>
          </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2D32',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
