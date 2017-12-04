import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import LandingSearch from './src/components/LandingSearch';
import Header from './src/components/Header';
// import Analytics from './src/components/Analytics'; Will include this back in when google analytics updates

import Nav from './src/components/Nav';



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
