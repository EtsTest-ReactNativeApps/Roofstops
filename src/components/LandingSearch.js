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
// import {Hoshi} from 'react-native-textinput-effects'



export default class LandingSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zipcode: '',
      isLoading: false,
      error: false
    }
  }

  handleSubmit() {
    this.setState({isLoading: true})
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
        <TextInput style={styles.input}
          keyboardType='numeric'
          onChangeText={(text) => this.onChanged(text)} value={this.state.myNumber}
          maxLength={10}
          // onChange={this.handleSearch.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
        <ActivityIndicator animating={this.state.isLoading} color="#111" size='large'/>
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
    paddingTop: 50,
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
