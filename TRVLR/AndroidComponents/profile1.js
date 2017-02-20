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


import { Form,
    Separator,InputField, LinkField,
    SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';

export default class TRVLR extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Tell us a little about yourself..
                </Text>


                <View style={styles.container}>
                    <Form
                        ref='registrationForm'
                        label="Personal Information">
                        <InputField
                            ref='first_name'
                            label='First Name'
                            placeholder='First Name'/>

                        <InputField
                            ref='last_name'
                            placeholder='Last Name'/>
                    </Form>

                </View>

                <Button
                    onPress = {onButtonPress}
                    title = "Next"
                    color = "#42f44e"
                    alignItems = "baseline"

                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    welcome: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
        color: '#207c76',
        fontWeight: 'bold'
    },

    container: {
        flex: .5,
        flexDirection: 'column',
        justifyContent: 'center', //replace with flex-end or center
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    }
});

AppRegistry.registerComponent('TRVLR', () => TRVLR);
