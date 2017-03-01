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

export default class firsttimeuser extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage}
                       source={require('./Unknown.png')}>

                    <Text style={styles.welcome}>
                        Welcome to <Text style={styles.appName}>
                        TRVLR
                    </Text>
                    </Text>




                    <Text style={styles.instructions}>
                        To start your customized experience, click "Get Started" below
                    </Text>

                </Image>


                <View style={styles.container2}>
                    <View style={styles.box3}>
                        <Button
                            onPress={onButtonPress}
                            title="Get Started"
                            color="cornflowerblue"
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
        backgroundColor: 'transparent'
    },
    backgroundImage: {

        width: 400,
        height: 620
    },
    welcome: {
        fontFamily: "Hiragino Mincho ProN",
        fontSize: 34,
        textAlign: 'center',
        margin: 20,

        color: 'black',



        backgroundColor: 'transparent'
    },
    appName: {
        fontFamily: "Futura",
        fontSize: 34,

        backgroundColor: 'transparent'

    },
    instructions: {

        fontSize: 15,
        fontFamily: "Hiragino Mincho ProN",
        textAlign: 'center',
        fontWeight: 'bold',
        paddingRight: 15,

        marginTop: 150,
        color: 'black',
        backgroundColor: 'transparent'
    },
    container: {
        flex: .5,
        flexDirection: 'column',
        justifyContent: 'center', //replace with flex-end or center
        borderBottomWidth: 1,
        borderBottomColor: 'transparent'
    }
});

AppRegistry.registerComponent('firsttimeuser', () => firsttimeuser);
