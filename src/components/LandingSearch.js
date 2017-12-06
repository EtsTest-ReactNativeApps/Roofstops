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
import {Sae} from 'react-native-textinput-effects'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'




export default class LandingSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zipcode: ''
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

  render() {
    return (
      <View>
        <Text style={styles.text}>Find Your Roof</Text>
        <View style={styles.mainContainer}>
        <Sae style={styles.width} label ={'Zipcode'} iconClass={FontAwesomeIcon} iconName={'pencil'} iconColor={'#262B2B'} autoCapitalize={'none'} autoCorrect={false} keyboardType="numeric" onChange={this.handleSearch.bind(this)} maxLength={5} value={this.state.zipcode} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
        </View>
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
    color: '#F3FFF8',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 50,
    justifyContent: 'center'
  },
  input: {
    borderWidth: 2,
    borderColor: '#F3FFF8',
    borderRadius: 7,
    height: 60,
    width: 150,
    color: '#F3FFF8',
    fontSize: 36,
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'rgb(111,101,174)',
    height: 45,
    width: 100,
    marginTop: 10,
    marginLeft: 5,
    borderRadius: 4,
    justifyContent: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#F3FFF8',
    alignSelf: 'center',
    fontSize: 18
  },
  width:{
    width: 100,
    marginLeft: 38,
    marginBottom:10
  }
});
