import React from 'react';
import { StyleSheet,View, Image,TouchableOpacity } from 'react-native';


export default class Header extends React.Component {
  constructor(){
    super()

}
render() {
  return (

        <View style={styles.container}>
          <TouchableOpacity onPress={this.props.homeScreen}>
          <Image
            style ={{marginTop:20, marginBottom:10}}source={require("../../images/roofstops-logo-2.png")}/>
          </TouchableOpacity>
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
