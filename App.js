import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingSearch from './src/components/LandingSearch';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LandingSearch />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2D32',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
