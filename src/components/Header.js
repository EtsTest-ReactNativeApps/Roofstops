import React from 'react';
import { StyleSheet,View, Image,TouchableOpacity } from 'react-native';

const Header = (props) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={props.homeScreen}>
      <Image
        style ={{
          marginTop:50, marginBottom:10
        }}
        source={require("../../images/roofstops-logo-3.png")}/>
    </TouchableOpacity>
  </View>
        )

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#262B2B',
  alignItems: 'center',
  justifyContent: 'center',
},
imageStyle: {
  marginTop: 40,
  marginBottom: 10
}
});

export default Header
