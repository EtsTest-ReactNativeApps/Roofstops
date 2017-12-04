import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import LandingSearch from './src/components/LandingSearch';
import Header from './src/components/Header';
// import Analytics from './src/components/Analytics'; Will include this back in when google analytics updates



export default class App extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
      {/* <Analytics /> */}
     
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
