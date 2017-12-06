import React from 'react'
import IndividualRooftopInfo from './IndividualRooftopInfo'
import {ScrollView, ListView, StyleSheet, TouchableHighlight, Text, View} from 'react-native'
import Review from './Review'
import {Button} from 'react-native-elements'


export default class ThirdPage extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    return (
      <View>
        <ScrollView>
          <IndividualRooftopInfo data={this.props.singleRoofData}/>
          <Review />
        </ScrollView>

        <ScrollView contentContainerStyle={styles.contentContainer}>
          <TouchableHighlight style={styles.backButton}
            onPress={this.props.returnToPrevious}>
            <Text style={styles.buttonText}>Back To List</Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: '#1B998B',
    height: 45,
    width: 160,
    marginTop: 10,
    marginLeft: 5,
    borderRadius: 4,
    justifyContent: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: '#F3FFF8',
    alignSelf: 'center',
    fontSize: 18
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
