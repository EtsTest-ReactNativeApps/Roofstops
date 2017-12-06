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
            style ={styles.imageStyle} source={require("../../images/roofstops-logo-2.png")}/>
          </TouchableOpacity>
        </View>


  );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
imageStyle: {
  marginTop: 40,
  marginBottom: 10
}
});
