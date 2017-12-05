import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class IndividualRooftopInfo extends React.Component {

  render(){
    var allRooftops = this.props.theirdata
    var roofArr = ['name', 'city', 'state', 'zipcode', 'address', 'phone', 'regular', 'happy', 'picture', 'website', 'rating']
    var singleRoof = roofArr.map((info, index) => {
      allRooftops[info]
    })
    return(
      <View style={styles.container}>
          <ScrollView>
            <Image source={{uri: this.props.theirdata.picture}} />
            <Text></Text>

          </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create[{

}]
