import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, NavigatorIOS } from 'react-native';
import Navi from './Navi'

//check path

export default class Rooftops extends React.Component {
constructor(props){
  super(props)
 console.log('Rooftops comp', this.props)

}

  render() {
    return (
      <View style={styles.container}>
        <Navi
          initialRoute={{
            component: Navi,
            title: 'Roof Stops'
          }}
          style={styles.container}
        />

        <Text>List of Rooftops</Text>
          {this.props.data.map(listItems =>
            <TouchableOpacity  key={listItems.id}>
            <Text key={listItems.id} onPress={e => this.props.goToSingle(listItems)}>
              {listItems.name}: {listItems.address}
            </Text>

          </TouchableOpacity>
          )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
