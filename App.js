import React from 'react';
import Review from './src/components/Review';

import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  

  render() {
    return (
      <View>
        <Review />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
