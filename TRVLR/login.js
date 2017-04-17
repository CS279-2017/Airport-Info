import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Image, Button, Alert, Container, Label, NavigatorIOS} from 'react-native';

import Home from './home.js';
import NewUser from './new_user.js'

import * as firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyAROtkpB8Q264PJ9wl3mK0WE7--OMRX_oc",
    authDomain: "trvlr-babc2.firebaseapp.com",
    databaseURL: "https://trvlr-babc2.firebaseio.com",
    storageBucket: "trvlr-babc2.appspot.com",
    messagingSenderId: "301890234334"
});

class Login extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      loaded: true,
      email: '',
      password: ''
    };
    this.login = this.login.bind(this);
    
  }
  
  async login(email,password) {
    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password);
      
      this.props.navigator.push({
        title: 'Home Screen',
        component: Home
      })
      
      console.log("Logged In!");
    } catch (error) {
      Alert.alert("Incorrect Email or Password")
    }
  }
  
  toCreate() {
      this.props.navigator.push({
      component: NewUser
    })
  }     
             
  render() {
    return (
      <View style = {{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#333333',
        alignItems: 'center',
        paddingBottom: 200,
        paddingTop: 100 }}>

        <Image source ={require('./applogo.png')} style={{width: 100, height: 100}}/>
        
        <View style = {{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 110
          }}>
        
        <TextInput
            style={{
              flexDirection: 'column',
              height: 35, 
              width:  305 ,
              borderWidth: 0,
              borderColor:  "white" ,
              backgroundColor: "white",
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            placeholder={'Email'}
            placeholderTextColor={'grey'}
            onChangeText={(email) => {this.setState({email})}}

          />
        
          <TextInput
            secureTextEntry={true}
            style={{
              flexDirection: 'column',
              height: 35, 
              width:  305 ,
              borderWidth: 0,
              borderColor:  "white" ,
              backgroundColor: "white",
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            placeholder={'Password'}
            placeholderTextColor={'grey'}
            onChangeText={(password) => {this.setState({password})}}

          />
        
        
        </View>
          
        <Button
            onPress={() => this.login()}
            title="Login"
            color="white"
        />
        <Button
            onPress = {() => this.toCreate()}
            title="Create Account"
            color="white"
        />


      </View>
      
      
    );
  }
}


module.exports = Login;
