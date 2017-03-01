import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    Alert,
    Navigator
} from 'react-native';


import { Form,
    Separator,InputField, LinkField,
    SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';


//import profile2 from './profile2.js';

const onButtonPress = () => {
    //this.props.navigator.push({
    //    title: "profile2",
    //    component: profile2
    //});

    //navigator sends user to profile1
    Alert.alert("Button Pressed");
}

export default class profile1 extends Component{

    render() {
        return (
            <View style={styles.container}>

                <View>
                    <Text style={styles.welcome}>
                        Tell us a little about yourself..
                    </Text>
                </View>

                <View style={styles.formContainer}>

                <Form
                    ref='registrationForm'
                    //onFocus={this.handleFormFocus.bind(this)}
                    //onChange={this.handleFormChange.bind(this)}
                    label="Personal Information">

                    <InputField
                        ref='first_name'
                        label='First Name'
                        textColor = 'white'
                        placeholder='First Name'
                    />

                    <InputField
                        ref='last_name'
                        label = 'Last Name'
                        labelColor = 'white'
                        placeholder='Last Name'

                    />

                    <InputField
                        ref='email'
                        label='Email'
                        textColor = 'white'
                        placeholder='Email'
                    />

                    <SwitchField label='I accept Terms & Conditions'
                                 ref="has_accepted_conditions"
                                 helpText='Please read carefully the terms & conditions'
                    />

                </Form>

                </View>

                <Button
                    onPress={onButtonPress}
                    title="Next"
                    color="black"
                    accessibilityLabel=""
                />

            </View>);

    }



}


const styles = StyleSheet.create({

    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        color: 'white',
        fontWeight: 'bold',
        borderBottomWidth: 40,
        borderBottomColor: '#333333',
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between', //replace with flex-end or center
        borderBottomWidth: 10,
        backgroundColor :'#333333',

    },

    formContainer:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingBottom: 100,
        paddingTop: 100,
        borderTopWidth: 0,
        borderBottomWidth: 150,
        borderBottomColor: '#333333',
        borderTopColor: '#333333'
    }

});

AppRegistry.registerComponent('profile1', () => profile1);

