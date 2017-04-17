import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Button,
  Image,
  TouchableHighlight,
} from 'react-native'

import CreateAccount from './createaccount.js';

class NewUser extends Component{

    
  
    onButtonPress() {
        this.props.navigator.push({
        component: CreateAccount
      })
    }   
  
    render() {
        return (
            <View style={styles.container}>

                <Text
                  style={{
                    color: "rgba(49,56,132,1)",
                    fontSize: 32,
                    fontWeight: 'normal',
                    fontFamily: "Marion",
                  }}>
                  Welcome to
                </Text>
            
                <Text
                  style={{
                    color: "rgba(49,56,132,1)",
                    fontSize: 45,
                    fontWeight: "900",
                    fontFamily: "Didot",
                  }}>
                  TRVLR
                </Text>
            
                <Text
                  style={{
                    color: "rgba(49,56,132,1)",
                    fontSize: 24,
                    fontWeight: 'normal',
                    fontFamily: "Marion",
                    textAlign: 'center'
                  }}>
                  Click continue to customize your experience 
                </Text>

                <Image source={require('./welcome.jpg')} style={styles.image} />
            
                <TouchableHighlight
                  onPress={() => this.onButtonPress()}
                  activeOpacity={75 / 100}
                  underlayColor={"rgb(74,144,226)"}>
                  <Text style = {{color: "rgba(49,56,132,1)",fontFamily:"Marion",fontSize: 18}}>Continue</Text>
                </TouchableHighlight>

            
            </View>


        );
    }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between', //replace with flex-end or center
        borderTopWidth: 1,
        borderTopColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        backgroundColor: 'white',
        paddingTop: 20,
        paddingBottom: 15
    },
  
    image: {
        height: 400
    }

});


module.exports = NewUser;