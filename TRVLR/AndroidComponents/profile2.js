/**
 * Created by Blake on 2/28/2017.
 */


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


export default class Profile2 extends Component{


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Airport info
                </Text>

                <View style={styles.formContainer}>

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

                    <PickerField ref='Airport 2'
                                 label='Airport 2'
                                 options={{
                                     "": '',
                                     austin: 'AUS',
                                     nashville: 'BNA',
                                     dallas: 'DFW',
                                     chicago: 'ORD',
                                     los_angeles: 'LAX',
                                     //look at www.world-airport-codes.com
                                 }}/>

                    <PickerField ref='Airport 3'
                                 label='Airport 3'
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
                        textColor = 'black'
                        placeholder='TSA #'
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
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    welcome: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    container: {
        flex: .5,
        flexDirection: 'column',
        justifyContent: 'space-between', //replace with flex-end or center
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        backgroundColor: '#333333'
    },
    formContainer:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingBottom: 0,
        borderTopWidth: 50,
        borderBottomWidth: 180,
        borderBottomColor: '#333333',
        borderTopColor: '#333333',
        paddingTop: 0
    }

});

AppRegistry.registerComponent('Profile2', () => Profile2);
