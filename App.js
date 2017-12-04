import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LandingSearch from './src/components/LandingSearch';
import Rooftops from './src/components/Rooftops';


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
