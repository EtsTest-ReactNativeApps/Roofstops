import React from 'react';
import { StyleSheet, Text, View, Scrollview } from 'react-native';
import LandingSearch from './src/components/LandingSearch';
import Header from './src/components/Header';
import { ScrollView } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
      <ScrollView>
      <Header
        initialRoute={{
          component: Header,
          title: 'Roof Stops'
        }}
        style={styles.container}
      />
      <LandingSearch />
      </ScrollView>
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
