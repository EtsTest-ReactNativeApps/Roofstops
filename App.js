import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

export default class App extends React.Component {
  render() {
    return (
      <Header
        initialRoute={{
          component: Header,
          title: 'Roof Stops'
        }}
        style={styles.container}
      />

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
