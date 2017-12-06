import React from 'react'
import {ScrollView} from 'react-native'
import { FormLabel, FormInput } from 'react-native-elements'




export default class Review extends React.Component{
    render(){
        return(

            <ScrollView>
              <FormLabel>Bar Review</FormLabel>
              <FormInput/>
            </ScrollView>
        )
    }

}
