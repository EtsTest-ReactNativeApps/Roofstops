import React from 'react'
import IndividualRooftopInfo from './IndividualRooftopInfo'
import {View} from 'react-native'
import Review from './Review'


export default class ThirdPage extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View>
      <IndividualRooftopInfo data={this.props.singleRoofData}/>
      <Review />
      </View>
    )
  }
}
