import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from '/Weather'; //check path

export default class RooftopsList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Weather />

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
