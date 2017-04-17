'use strict';
import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Image, Button, Alert, Container, Label, NavigatorIOS, StyleSheet, SwitchField} from 'react-native';

import Create2 from './add_account_info.js';

import * as firebase from "firebase";

 class CreateAccount extends Component {

  constructor(props){
    super(props);
    this.state = {
      loaded: true,
      email: '',
      password: '',
      first: '',
      last: ''
    };
    this.signup = this.signup.bind(this);
    
  }
   
   async signup(email,password) {
    
     try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password);
      this.props.navigator.push({
        title: 'Get Info',
        component: Create2
      })
      
      
    } catch (error) {
      Alert.alert(error.toString())
      console.log(error.toString())
    }
  }
   
  render() {
    return (
            <View style={styles.container}>

                <View>
                    <Text style={styles.welcome}>
                        Let's customize your experience!
                    </Text>
                </View>
                
                <View style={styles.inputView}>
                  <Text>What is your first name?</Text>
                  <TextInput style={styles.input}
                          textColor = 'black'
                          onChangeText={(first) => {this.setState({first})}}
                      />
                </View>
        
                <View style={styles.inputView}>
                  <Text>What is your last name?</Text>
                  <TextInput style={styles.input}
                          textColor = 'black'
                          onChangeText={(last) => {this.setState({last})}}
                      />
                </View>
        
        
                <View style={styles.inputView}>
                  <Text>What is your email?</Text>
                  <TextInput style={styles.input}
                          textColor = 'black'
                          onChangeText={(email) => {this.setState({email})}}
                      />
                </View>
        
                <View style={styles.inputView}>
                  <Text>Enter a password</Text>
                  <TextInput style={styles.input}
                          secureTextEntry = { true }
                          textColor = 'black'
                          onChangeText={(password) => {this.setState({password})}}
                      />
                </View>

                <Button
                    onPress={() => this.signup()}
                    title="Next"
                    color="black"
                />

            </View>);

  }
}

const styles = StyleSheet.create({

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'skyblue',
        borderBottomWidth: 10,
        borderBottomColor: '#000',
        paddingTop: 10
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between', //replace with flex-end or center
        borderTopWidth: 20,
        borderTopColor: 'white',
        borderBottomWidth: 10,
        backgroundColor :'white'
    },

    input:{
        flexDirection: 'column',
        height: 35, 
        width:  305,
        borderWidth: 0,
        borderColor:  "white" ,
        backgroundColor: "skyblue",
        justifyContent: 'center',
        alignItems: 'center',
    },
  
    inputView: {
        flexDirection: 'column',
        height: 35, 
        width:  305 ,
        borderWidth: 0,
        borderColor:  "white" ,
        backgroundColor: "white",
        justifyContent: 'center',
        alignSelf: 'center',    
        alignItems: 'center',
        borderBottomWidth: 5,
        borderBottomColor: 'black',
    }

});


module.exports = CreateAccount;



