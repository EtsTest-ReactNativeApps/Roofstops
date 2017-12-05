import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Button
} from 'react-native';

export default class LandingSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zipcode: '',
      isLoading: false,
      error: false
    }
  }

  handleSearch(event) {
    this.setState({zipcode: event.nativeEvent.text})
  }

  handleSubmit() {
    let zip = this.state.zipcode
    this.props.findbyZip(zip)    
    this.props.gotoRoofstops()
  }

  onChanged(text) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        alert("Enter Zip Code");
      }
    }
    this.setState({myNumber: newText});
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.text}>Find Your Roof</Text>
        <TextInput keyboardType='numeric' onChange={this.handleSearch.bind(this)} maxLength={5} style={styles.input} value={this.state.zipcode}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
    color: '#A7A09E',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
    justifyContent: 'center'
  },
  input: {
    borderWidth: 2,
    borderColor: '#A7A09E',
    borderRadius: 7,
    height: 60,
    width: 150,
    color: '#A7A09E',
    fontSize: 36,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#A7A09E',
    height: 45,
    width: 100,
    marginTop: 10,
    borderRadius: 4,
    justifyContent: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#2F2D32',
    alignSelf: 'center',
    fontSize: 18
  }
});
