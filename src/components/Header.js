import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';


export default class Header extends React.Component {
  constructor(props){
    super(props)

}
render() {
  return (

        <View style={styles.container}>
          <ScrollView/>
          <Image
            style ={{marginTop:20}}source={require("../../images/roofstops-logo-2.png")} />
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
