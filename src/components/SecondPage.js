import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Weather from './Weather'
import Rooftops from './Rooftops'
import ThirdPage from './ThirdPage'

export default class SecondPage extends React.Component{
    constructor(props){
      super(props)

      this.state ={
        weatherComponent: true,
        Roofstops: true,
        singleRoof: false,
        singleRoofData: [],
        thirdPage:false,
        data: this.props.data
      }
    }
    //Sets singleRoofData to individual items and removes full list and weatherComponent
    singleRooftop = (listItems) => {
      this.setState({
        singleRoof: true,
        thirdPage:true,
        singleRoofData: listItems,
        Roofstops:false,
        weatherComponent: false
         })
    }
    returnToPrevious = () => {
      this.setState({
        thirdPage:false,
        Roofstops: true,
        weatherComponent:true
      })
    }


    render(){

      return (
        <View>
          <ScrollView>

            {
              this.state.Roofstops ? <Rooftops data={this.props.data} goToSingle ={this.singleRooftop}/> : null
            }

            {
              this.state.thirdPage ? <ThirdPage singleRoofData ={this.state.singleRoofData} data ={this.state.data} returnToPrevious ={this.returnToPrevious}/> : null
            }
          </ScrollView>

          <ScrollView>

            {
              this.state.weatherComponent ? <Weather /> : null
            }
          </ScrollView>

        </View>
      )
    }
}
