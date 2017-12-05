import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default class IndividualRooftopInfo extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View>
          <ScrollView>
            <Text>HEY THIS A ROOFTOP</Text>
          </ScrollView>
        </View>
    )
  }
}
