import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, ActivityIndicator, Button } from 'react-native';

export default class LandingSearch extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      zipcode: '',
      isLoading: false,
      error: false
    }
  }

  handleSearch(event){
    this.setState({
      zipcode: event.nativeEvent.text
    })
  }

  handleSubmit(){
    this.setState({
      isLoading: true,
    })
  }

  render(){
    return(
      <View style={styles.mainContainer} >
        <Text style={styles.text}>Find Your Roof</Text>
        <TextInput
          style={styles.input}
          value={this.state.zipcode}
          onChange={this.handleSearch.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
        <ActivityIndicator
        animating={this.state.isLoading}
        color="#111"
        size='large'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#A7A09E',
    fontSize: 22,
    textAlign: 'center',
    paddingBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A7A09E',
    borderRadius: 8,
    height: 40,
    width: 150,
    color: '#A7A09E',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#A7A09E',
    height: 45,
    width: 100,
    marginTop: 10,
    borderRadius: 4,
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#2F2D32',
    alignSelf: 'center',
    fontSize: 18,
  }
});
