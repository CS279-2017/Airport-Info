/**
 * Created by Blake on 2/28/2017.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
 This is a view i use in a test app,
 very useful to list all the use cases
 */

import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,ScrollView,
} from 'react-native';


import { Form,
    Separator,InputField, LinkField,
    SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';

export default class TRVLR extends Component{

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10,paddingRight:10, height:200}}>

                <Text style={styles.welcome}>
                    Tell us a little about yourself..
                </Text>

                <Form
                    ref='registrationForm'
                    //onFocus={this.handleFormFocus.bind(this)}
                    //onChange={this.handleFormChange.bind(this)}
                    label="Personal Information">



                    <Separator />

                    <InputField
                        ref='first_name'
                        label='First Name'
                        placeholder='First Name'
                    />

                    <InputField
                        ref='last_name'
                        label = 'Last Name'
                        placeholder='Last Name'
                    />

                    <InputField
                        ref='email'
                        label='Email'
                        placeholder='Email'
                    />

                    <PickerField ref='Home Airport'
                                 label='Home Airport'
                                 options={{
                                     "": '',
                                     austin: 'AUS',
                                     nashville: 'BNA',
                                     dallas: 'DFW',
                                     chicago: 'ORD',
                                     los_angeles: 'LAX',
                                     //look at www.world-airport-codes.com
                                 }}/>



                    <Separator />


                    <SwitchField label='I accept Terms & Conditions'
                                 ref="has_accepted_conditions"
                                 helpText='Please read carefully the terms & conditions'
                    />


                </Form>


            </ScrollView>);

        <Button
            onPress={onButtonPress=Alert.alert('Button has been pressed!')}
            title="Login"
            color="white"

            accessibilityLabel=""
        />

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
