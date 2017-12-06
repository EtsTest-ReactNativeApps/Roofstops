import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Navi from './Navi'

//check path

export default class Rooftops extends React.Component {
constructor(props){
  super(props)
 //console.log(this.props)
}

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.roofstopsTitle}>Rooftops Near You</Text>
          {this.props.data.map(listItems =>
            <TouchableOpacity  key={listItems.id}>
            <Text style={styles.listItemName} key={listItems.id} onPress={e => this.props.goToSingle(listItems)}>
              {listItems.name}
            </Text>
            <Text style={styles.address}>{listItems.address}</Text>
          </TouchableOpacity>
          )}

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
    fontSize: 24,
    marginBottom: 10,
    color: '#046C87',
    // color: '#ED9B40',
  },
  listItemName: {
    fontSize: 20,
    textAlign: 'center',
    color: '#F4F7F4'
  },
  address: {
    textAlign: 'center',
    marginBottom: 10,
    // color: '#115933',
    color: '#1B998B',
  }
});
