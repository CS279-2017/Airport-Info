/**
 * Created by Blake on 2/28/2017.
 */


import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView,
    Button,
    Alert
} from 'react-native';


import { Form,
    Separator,InputField, LinkField,
    SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';

const onButtonPress = () => {
    Alert.alert("NEW USER CREATED");
}


export default class profile2 extends Component{


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Airport info
                </Text>

                <Form
                    ref='registrationForm'
                    //onFocus={this.handleFormFocus.bind(this)}
                    //onChange={this.handleFormChange.bind(this)}
                    label="Personal Information">

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


                    <InputField
                        ref='TSA'
                        label='TSA #'
                        textColor = 'white'
                        placeholder='TSA #'
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
        justifyContent: 'space-between', //replace with flex-end or center
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    }
});

AppRegistry.registerComponent('Profile2', () => profile2);
