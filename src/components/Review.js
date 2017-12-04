import React from 'react'
import {TextInput, View, Text} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

export default class Review extends React.Component{

    constructor(props){
        super(props)
    
        this.state ={ text: ""}
      }
    render(){
        return (
            <View>
            <View style={{backgroundColor: 'grey', height: 200, justifyContent: 'center'}}>
            <Sae
    label={'Review'}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'white'}
    onChangeText = {(text) => this.setState({text})}    
    autoCapitalize={'none'}
    autoCorrect={false} />          
    </View>

    <View> 
        <Text style={{ height: 40, justifyContent: 'center'}}>{this.state.text}</Text>
    </View>
    </View>
        )}
    }

    