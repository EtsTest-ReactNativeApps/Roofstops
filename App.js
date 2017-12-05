import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import LandingSearch from './src/components/LandingSearch';
import Rooftops from './src/components/Rooftops';
import IndividualRooftopInfo from './src/components/IndividualRooftopInfo';
import Weather from './src/components/Weather';
// import Analytics from './src/components/Analytics'; Will include this back in when google analytics updates

import Navi from './src/components/Navi';
import Header from './src/components/Header';


export default class App extends React.Component {
  constructor(){
    super()

    this.state = {Roofstops: false, removeSearch: true, weatherComponent: false, data:[], singleRoofData: [], singleRoof: false}

  }
  async componentDidMount() {
    const response = await fetch(`https://thawing-anchorage-35743.herokuapp.com/api/locations`)
    const json = await response.json()
    // console.log(json)
     this.setState({data: json})
     console.log('api call', this.state.data)
  }

  findbyZip = (zip) => {
    let zipData = this.state.data
    let arr = []
    for (let i = 0; i< zipData.length; i++){
      if(zipData[i].zipcode === (+zip)){
        arr.push(zipData[i])
        this.setState({data: arr})
          }
        }

  }

gotoRoofstops = () => {
  this.setState({Roofstops: true, removeSearch: false , weatherComponent: true})

}

homeScreen = (e) => {

  this.setState({removeSearch: true, Roofstops:false, weatherComponent: false})
}
  singleRooftop = (listItems) => {
    console.log('here', listItems)
    this.setState({singleRoof: true, singleRoofData: listItems, removeSearch: false, Roofstops:false, weatherComponent: false })
  }

  render() {
    return (

          <View style={styles.container}>
            <ScrollView>
              <Header homeScreen ={this.homeScreen}/>
              {
                this.state.Roofstops ? <Rooftops data = {this.state.data} goToSingle={this.singleRooftop}/> : null
              }
              {
                this.state.removeSearch ? <LandingSearch gotoRoofstops = {this.gotoRoofstops} findbyZip = {this.findbyZip}/> :  null
              }
              {
                this.state.weatherComponent ? <Weather /> : null
              }

              {
                this.state.singleRoof ? <IndividualRooftopInfo singleRoofData={this.state.singleRoofData} /> : null
              }

            </ScrollView>
          </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262B2B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
