

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
    // this.props.navigator.push({
    //    title: "profile1",
    //   component: profile1
    Alert.alert("Button Pressed")
}



export default class TRVLR extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Welcome to TRVLR!
                </Text>

                <View style = {{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#333333',
                    alignItems: 'center',
                    paddingBottom: 400,
                    paddingTop: 50 }}>

                    <Image
                        source ={{uri: 'https://cloud.githubusercontent.com/assets/21345486/22996276/dd8cae7c-f393-11e6-9987-eecc352d985e.png'}}
                        style={{width: 200, height: 200}}/>

                    <Text style={styles.instructions}>
                        To start your customized experience, click "get started" below
                    </Text>

                </View>




                <Button
                    onPress={onButtonPress}
                    title="Get started"
                    color="#42f44e"
                    alignSelf="fill" />
            </View>
        );
    }


}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: '#333333',
    },
    welcome: {
        fontSize: 34,
        textAlign: 'center',
        margin: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    instructions: {
        fontSize: 14,
        textAlign: 'left',
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 300,
        color: 'white'
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    }
});

AppRegistry.registerComponent('firsttimeuser', () => firsttimeuser);
