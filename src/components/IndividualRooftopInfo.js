import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableHighlight } from 'react-native';
import call from 'react-native-phone-call'

export default class IndividualRooftopInfo extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const args = {
      number: this.props.data.phone, // String value with the number to call
    }
    return(
      <View>
          <ScrollView contentContainerStyle={styles.contentContainer}>
              <Image
                  style={{width: 400, height: 200}}
                source={{uri: this.props.data.picture}}
              />

              <Text style={styles.name}>{this.props.data.name}</Text>
              <Text style={styles.address}>{this.props.data.address}  {this.props.data.city}, {this.props.data.zipcode}</Text>
              <TouchableHighlight style={styles.button} underlayColor="white">
                <Text style={styles.website}
                  onPress={() => Linking.openURL(this.props.data.googleUrl)}>Map View</Text>
              </TouchableHighlight>
              <Text style={styles.details}></Text>
              <Text style={styles.hours}>Regular Hours</Text>
              <Text style={styles.details}>{this.props.data.regular}</Text>
              <Text style={styles.hours}>Happy Hour</Text>
              <Text style={styles.details}>{this.props.data.happy}</Text>
              <Text
                style={styles.phone}
                onPress={() => call(args)}> {this.props.data.phone}
              </Text>

            <TouchableHighlight style={styles.button} underlayColor="white">
              <Text style={styles.website}
                onPress={() => Linking.openURL(this.props.data.website)}>
                Visit the Website
              </Text>
            </TouchableHighlight>
          </ScrollView>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Avenir-Heavy',
    textAlign: 'center',
    color: '#F4F7F4',
    paddingBottom: 5,
    paddingTop: 5,
  },
  hours: {
    fontWeight: 'bold',
    fontFamily: 'Avenir-Light',
    fontSize: 18,
    textAlign: 'center',
    color: '#F4F7F4',
  },
  details: {
    fontSize: 18,
    fontFamily: 'Avenir-Light',
    textAlign: 'center',
    color: '#F4F7F4',
    paddingBottom: 10,
  },
  address: {
    fontSize: 18,
    fontFamily: 'Avenir-Light',
    textAlign: 'center',
    color: '#F4F7F4',
  },
  phone: {
    fontSize: 18,
    fontFamily: 'Avenir-Light',
    textAlign: 'center',
    color: '#F4F7F4',
    paddingBottom: 5,
    paddingTop: 5,
    textDecorationLine: 'underline'
  },
  website: {
    color: '#F4F7F4',
    fontSize: 18,
    fontFamily: 'Avenir-Light',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#6F65AE',
    height: 45,
    width: 160,
    marginTop: 10,
    marginLeft: 5,
    borderRadius: 4,
    justifyContent: 'center',
    marginBottom: 10
  },

})
