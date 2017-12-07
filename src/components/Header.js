import React from 'react';
import { StyleSheet,View, Image,TouchableOpacity } from 'react-native';

const Header = (props) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={props.homeScreen}>
      <Image
        style ={{
          marginTop:50, marginBottom:10
        }}
        source={require("../../images/roofstops-logo-5.png")}/>
    </TouchableOpacity>
  </View>
        )

const styles = StyleSheet.create({
container: {
  flex: 0.2,
  alignItems: 'center',
  justifyContent: 'center',
  height: 80,
},
imageStyle: {
  marginTop: 40,
  marginBottom: 10
}
});

export default Header
