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

  handleSubmit = () => {
    let zip = this.state.zipcode
    if(zip){
      this.props.findbyZip(zip)
      this.props.gotoRoofstops()
    }

  }

  render() {
    return (
      <View>
        <Text style={styles.tagline}>"Rooftops Worth The Stop"</Text>
        {/* <Text style={styles.text}>Enter Your Zipcode</Text> */}
        <View style={styles.mainContainer}>
          <Sae style={styles.width}
            label={'zipcode'} labelStyle={{color: '#1B998B'}}
            iconClass={FontAwesomeIcon} iconName={'pencil'} iconColor={'#1B998B'} autoCapitalize={'none'} autoCorrect={false} keyboardType="numeric" onChange={this.handleSearch.bind(this)} maxLength={5} value={this.state.zipcode} />
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
    paddingTop: 50,
  },
  tagline: {
    color: '#F3FFF8',
    fontSize: 24,
    // fontFamily: 'Savoye LET',
    fontFamily: 'Avenir-Light',
    textAlign: 'center',
    paddingTop: 10,
    justifyContent: 'center'
  },
  text: {
    color: '#F3FFF8',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
    justifyContent: 'center'
  },
  input: {
    borderWidth: 2,
    borderColor: '#F3FFF8',
    borderRadius: 7,
    height: 60,
    width: 150,
    color: '#F3FFF8',
    // color: '#1B998B',
    fontSize: 36,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#1B998B',
    height: 50,
    width: 200,
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
    width: 200,
    marginLeft: 20,
    marginBottom:10,
    marginRight: 15,
  }
});
