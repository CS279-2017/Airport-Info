import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,ScrollView, Button, Alert
} from 'react-native';


import { Form,
    Separator,InputField, LinkField,
    SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';


const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
}

export default class TRVLR extends Component{

    render() {
        return (
            <View style={styles.container}>

                <View>
                    <Text style={styles.welcome}>
                        Tell us a little about yourself..
                    </Text>
                </View>

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

                    <Separator />

                    <SwitchField label='I accept Terms & Conditions'
                                 ref="has_accepted_conditions"
                                 helpText='Please read carefully the terms & conditions'
                    />
                </Form>



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
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
        color: '#207c76',
        fontWeight: 'bold'
    },

    container: {
        flex: .5,
        flexDirection: 'column',
        justifyContent: 'space-between', //replace with flex-end or center
        borderBottomWidth: 10,
        justifyContent: 'space-between'
    }
});

AppRegistry.registerComponent('TRVLR', () => TRVLR);
