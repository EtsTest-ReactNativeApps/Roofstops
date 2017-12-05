import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navi from './Navi'
//check path

export default class Rooftops extends React.Component {
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
        {/*API info  */}
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
