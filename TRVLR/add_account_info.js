import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Button,
  Alert,
  Form,
  PickerField,
  NavigatorIOS,
  TextInput,
  PickerIOS,
} from 'react-native'

import Home from './home';

var ref = new Firebase("https://trvlr-babc2.firebaseio.com/");
var usersRef = ref.child("users");
usersRef.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});

class AddAccountInfo extends Component{


  
    onButtonPress() {
        this.props.navigator.push({
        title: 'Home',
        component: Home
      })
    }   

    render() {
        return (
            <View style={styles.container}>
            
                <View>
                    <Text style={styles.welcome}>
                        Give us some information about your travels
                    </Text>
                </View>
                
                <View style={styles.inputView}>
                  <Text>What is your home airport?</Text>
                  <PickerIOS 
                    style={{
                      alignSelf: 'stretch'
                    }}
                    homeAirport={(this.state && this.state.homeAirport) || 'a'}
                    onValueChange={(value) => {
                      this.setState({value})
                    }}>
                    <PickerIOS.Item label={'Dulles International Airport'} value={'a'} />
                    <PickerIOS.Item label={'Los Angeles International Airport'} value={'b'} />
                    <PickerIOS.Item label={'Nashville International Airport'} value={'c'} />
                    <PickerIOS.Item label={'Newark Liberty International Airport'} value={'d'} />
                    <PickerIOS.Item label={'O\'Hare International Airport'} value={'e'} />
                  </PickerIOS>
                </View>
            
              <View style={styles.inputView}>
                  <View style={styles.inputView}>
                  <Text style= {{fontSize: 20}}>Frequent Flyer Numbers</Text>
                  <Text>Airline</Text>
                  <TextInput style={styles.input}
                          textColor = 'black'
                          onChangeText={(airline) => {this.setState({airline})}}
                      />
                  <Text>Number</Text>
                  <TextInput style={styles.input}
                          textColor = 'black'
                          onChangeText={(number) => {this.setState({number})}}
                      />
                </View>
                  
                </View>

              <Button
                    onPress={() => this.onButtonPress()}
                    title="Finish"
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
        borderBottomWidth: 10,
        borderBottomColor: 'black',
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

    pickerStyle:{
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: 100,
        paddingTop: 100,
        borderTopWidth: 0,
        borderBottomWidth: 150,
        borderBottomColor: '#333333',
        borderTopColor: '#333333'
    },
  
    input:{
        flexDirection: 'column',
        height: 35, 
        width:  100,
        borderWidth: 0,
        borderColor:  "white" ,
        backgroundColor: "skyblue",
        justifyContent: 'center',
        alignSelf: 'center',
    },
  
    inputView: {
       
        borderColor:  "white" ,
        backgroundColor: "white",
        justifyContent: 'center',
        alignSelf: 'stretch',    
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    }

});

module.exports = AddAccountInfo;