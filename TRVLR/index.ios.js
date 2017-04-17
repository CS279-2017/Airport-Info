'use strict';

import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, AppRegistry, StyleSheet} from 'react-native';

import * as firebase from "firebase";
firebase.initializeApp({
    apiKey: "AIzaSyAROtkpB8Q264PJ9wl3mK0WE7--OMRX_oc",
    authDomain: "trvlr-babc2.firebaseapp.com",
    databaseURL: "https://trvlr-babc2.firebaseio.com",
    projectId: "trvlr-babc2",
    storageBucket: "trvlr-babc2.appspot.com",
    messagingSenderId: "301890234334"
});

import Login from './home';

class TRVLR extends Component {
  render() {
    return (
      <NavigatorIOS
        style = {styles.container}  
        initialRoute={{
          title: 'Login',
          component: Login
        }}
        navigationBarHidden={true}/>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 2,
  }
});

AppRegistry.registerComponent('TRVLR', () => TRVLR); 
