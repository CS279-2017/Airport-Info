import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, Button, Alert } from 'react-native';

class tvlr extends Component {
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

        <Button
            onPress={onButtonPress=Alert.alert('Button has been pressed!')}
            title="Login"
            color="white"

            accessibilityLabel=""
        />


      </View>
    );
  }
}

AppRegistry.registerComponent('tvlr', () => tvlr);
