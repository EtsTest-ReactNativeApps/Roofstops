import React from 'react'
import IndividualRooftopInfo from './IndividualRooftopInfo'
import {ScrollView, ListView,} from 'react-native'
import Review from './Review'
import {Button} from 'react-native-elements'



export default class ThirdPage extends React.Component {
  constructor(props){
    super(props)
  }



  render(){
    return (

      <ScrollView>
        <IndividualRooftopInfo data={this.props.singleRoofData}/>
        <Review />
        <Button small
          title='Back'
          backgroundColor ={'#1B998B'}
          onPress={this.props.returnToPrevious} />
      </ScrollView>
    )
  }
}
