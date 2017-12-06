import React from 'react'
import IndividualRooftopInfo from './IndividualRooftopInfo'
import { StyleSheet, Text, ScrollView, View } from 'react-native';


export default class ThirdPage extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log('This One', this.props);
    return (
    <View>
      <IndividualRooftopInfo data={this.props.singleRoofData}/>
    </View>
    )
  }
}
