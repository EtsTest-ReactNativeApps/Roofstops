import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Navi from './Navi'

//check path

export default class Rooftops extends React.Component {
constructor(props){
  super(props)
}

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.roofstopsTitle}>Rooftops near {this.props.data[0].zipcode}</Text>
          {this.props.data.map(listItems =>
            <TouchableOpacity  key={listItems.id}>
            <Text style={styles.listItemName} key={listItems.id} onPress={e => this.props.goToSingle(listItems)}>
              {listItems.name}
            </Text>
            <Text style={styles.address}>{listItems.address}</Text>
          </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.button} onPress={this.props.homeScreen}>
            <Text style={styles.buttonText}>New Search</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roofstopsTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: '#F4F7F4',
  },
  listItemName: {
    fontSize: 20,
    textAlign: 'center',
    color: '#F4F7F4',
    fontFamily: 'Avenir-Heavy',
  },
  address: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#1B998B',
    fontFamily: 'Avenir-Light',
  },
  button: {
    backgroundColor: '#1B998B',
    height: 45,
    width: 160,
    marginTop: 10,
    marginLeft: 5,
    borderRadius: 4,
    justifyContent: 'center',
    marginBottom: 10
  },
  buttonText: {
      color: '#F4F7F4',
      fontSize: 18,
      fontFamily: 'Avenir-Light',
      alignSelf: 'center',
  },
});
