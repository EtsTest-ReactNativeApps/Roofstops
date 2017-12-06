import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import LandingSearch from './src/components/LandingSearch';
import SecondPage from './src/components/SecondPage';
import Header from './src/components/Header';


export default class App extends React.Component {
  constructor(){
    super()

    this.state = {
      removeSearch: true,
      data:[],
      activeSecond: false
    }

  }

  //Gets all data from API and sets state to Result
  async componentDidMount() {
    const response = await fetch(`https://thawing-anchorage-35743.herokuapp.com/api/locations`)
    const json = await response.json()
     this.setState({data: json})
  }

  //Filters returned rooftops by zipcode
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

  //Removes Search bar and goes to second page
  gotoRoofstops = () => {
    this.setState({activeSecond: true, removeSearch: false})
  }

  //Send Logo to Home Screen
  homeScreen = (e) => {
    this.setState({removeSearch: true, activeSecond:false})
  }

  render() {
    return (

          <View style={styles.container}>
            <ScrollView>
              <Header homeScreen ={this.homeScreen}/>
              {
                this.state.removeSearch ? <LandingSearch gotoRoofstops = {this.gotoRoofstops} findbyZip = {this.findbyZip}/> :  null
              }

              {
                this.state.activeSecond ? <SecondPage data={this.state.data}/> : null
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
