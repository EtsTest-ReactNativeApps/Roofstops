import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking } from 'react-native';

export default class IndividualRooftopInfo extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props.data);
    return(
      <View>
          <ScrollView>
            <Text>HEY THIS A ROOFTOP</Text>
            <Text>
              <Image
                  style={{width: 200, height: 200}}
                source={{uri: this.props.data.picture}}
              />
              {this.props.data.name}
              {this.props.data.city}
              {this.props.data.address}
              {this.props.data.zipcode}
              {this.props.data.regular}
              {this.props.data.happy}
              {this.props.data.phone}
              <Text style={{color: 'blue'}}
                onPress   ={() => Linking.openURL(this.props.data.website)}>
                Visit their Website
              </Text>

            </Text>
          </ScrollView>
        </View>
    )
  }
}
