import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import LandingSearch from './src/components/LandingSearch';
import Rooftops from './src/components/Rooftops';
import Weather from './src/components/Weather';
// import Analytics from './src/components/Analytics'; Will include this back in when google analytics updates

import Navi from './src/components/Navi';



export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {gotoRoofstops: false}
  }

gotoRoofstops = () => {
  this.setState({gotoRoofstops: true})
}

  render() {
    return (

          <View style={styles.container}>
            <ScrollView>
              { 
                this.state.gotoRoofstops ? <Rooftops /> : null
              }

              <LandingSearch gotoRoofstops = {this.gotoRoofstops}/>
              <Weather />
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
