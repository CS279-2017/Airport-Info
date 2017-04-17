import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Button
} from 'react-native'

import AddWaitTime from './home';
import AddFlight from './home';


class Home extends Component{
  
    onAddWaitTime() {
        this.props.navigator.push({
        component: AddWaitTime
      })
    }   
  
    onAddFlight() {
          this.props.navigator.push({
          component: AddFlight
        })
      }  
  
    render() {
        return (
            <ScrollView horizontal={false}>
              
              <View
                style={styles.element}>
                <Text style={styles.title}>
                  My Flights
                </Text>
                
                <Button style = {styles.button}
                      onPress={() => this.onAddFlight()}
                      title="Add Flight"
                      color="blue"
                  />
              </View>
              
              <View
                style={styles.element}>
                <Text style={styles.title}>
                  Airport Information
                </Text>
                
                <Button style = {styles.button}
                      onPress={() => this.onAddWaitTime()}
                      title="Add Security Wait Time"
                      color="blue"
                  />
              </View>
            
              <View
                style={styles.element}>
              <Text style={styles.title}>
                TSA Announcements
              </Text>
              </View>
              
            </ScrollView>


        );
    }

}

const styles = StyleSheet.create({

    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'normal',
        fontFamily: 'Helvetica Neue',
    },
  
    element: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: "center",
      backgroundColor:  "white",
      borderBottomWidth: 2,
      borderBottomColor: '#000',
      paddingBottom: 10
    }, 
  
    button: {
      flexDirection: 'row', 
      justifyContent: 'space-between'
    }
    

});

module.exports = Home;