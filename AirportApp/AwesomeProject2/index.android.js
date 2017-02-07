/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Navigator,
  Alert
} from 'react-native';


const onButtonPress = () => {
	Alert.alert('Button has been pressed!');
}
			
};
export default class AwesomeProject2 extends Component {
  render() {
    return (
		<View style={styles.container}>
			<Image style={styles.backgroundImage} 
				source={{uri: 'https://i1.wallpaperscraft.com/image/plane_sky_flying_sunset_64663_225x300.jpg'}}>
		
				<Text style={styles.welcome}>
					Welcome to TL;VR!
				</Text>

				<Text style={styles.instructions}>
					To start your customized experience, click "get started" below
				</Text>
	
			</Image>
		
		
			<View style={styles.container2}>
				<View style={styles.box3}>
					<Button
						onPress={onButtonPress}
						title="Get started"
						color="#42f44e"
						accessibilityLabel="Learn more about this purple button"
						alignSelf="stretch"
					/>
				</View>
			</View>
		</View>
    );
  }
}




const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  welcome: {
    fontSize: 34,
    textAlign: 'center',
    margin: 10,
	color: 'white',
	fontWeight: 'bold'
  },
  instructions: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
	color: 'white'
  },
  container: {
    flex: .5,
    flexDirection: 'column',
    justifyContent: 'center', //replace with flex-end or center
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  }
});

AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);
