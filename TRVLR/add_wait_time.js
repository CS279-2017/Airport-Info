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

class Home extends Component{

    // initialize your variables outside the function 
    var count = 0; 
    var clearTime; 
    var seconds = 0, minutes = 0, hours = 0; 
    var clearState; var secs, mins, gethours ; 
    function startWatch( ) { 
      /* check if seconds is equal to 60 and add a +1 to minutes, and set seconds to 0 */ 
      if ( seconds === 60 ) { seconds = 0; minutes = minutes + 1; } 
      /* you use the javascript tenary operator to format how the minutes should look and add 0 to minutes if less than 10 */
      mins = ( minutes < 10 ) ? ( '0' + minutes + ': ' ) : ( minutes + ': ' );
      /* check if minutes is equal to 60 and add a +1 to hours set minutes to 0 */
      if ( minutes === 60 ) { minutes = 0; hours = hours + 1; }
      /* you use the javascript tenary operator to format how the hours should look and add 0 to hours if less than 10 */
      gethours = ( hours < 10 ) ? ( '0' + hours + ': ' ) : ( hours + ': ' ); secs = ( seconds < 10 ) ? ( '0' + seconds ) : ( seconds ); 
      // display the stopwatch
      var x = document .getElementById("timer");
      x.innerHTML = 'Time: ' + gethours + mins + secs; 
      /* call the seconds counter after displaying the stop watch and increment seconds by +1 to keep it counting */
      seconds++; 
      /* call the setTimeout( ) to keep the stop watch alive ! */ 
      clearTime = setTimeout( "startWatch( )", 1000 ); } 
      // startWatch( ) //create a function to start the stop watch 
    function startTime( ) { 
     /* check if seconds, minutes, and hours are equal to zero and start the stop watch */ 
     if ( seconds === 0 && minutes === 0 && hours === 0 ) { 
       /* hide the fulltime when the stop watch is running */ 
       var fulltime = document.getElementById( "fulltime" ); 
       fulltime.style.display = "none"; 
       /* hide the start button if the stop watch is running */
       this.style.display = "none";
       /* call the startWatch( ) function to execute the stop watch whenever the startTime( ) is triggered */
       startWatch( ); } 
     // if () } // startTime() 
     /* you need to bind the startTime( ) function to any event type to keep the stop watch alive ! */
     window.addEventListener( 'load', function ( ) { var start = document .getElementById("start"); start.addEventListener( 'click', startTime ); });
     // startwatch.js end 
   
  
    onButtonPress() {
        this.props.navigator.push({
        component: AddWaitTime
      })
    }   
  
    render() {
        return (
            <View style={styles.container}>

                <Button
                    onPress={() => this.onStartTimer()}
                    title="StartTimer"
                    color="black"
                    accessibilityLabel=""
                />
            
                <Button
                    onPress={() => this.onEndTimer()}
                    title="EndTimer"
                    color="black"
                    accessibilityLabel=""
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
        color: 'white',
        fontWeight: 'bold'
    },
    welcome2: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: 'black',
        fontWeight: 'bold'
    },
    welcome3: {
        fontSize: 14,
        textAlign: 'left',
        margin: 10,
        color: 'black'
    },

    container: {
        flex: .5,
        flexDirection: 'column',
        justifyContent: 'space-between', //replace with flex-end or center
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        backgroundColor: '#333333'
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between', //replace with flex-end or center
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        backgroundColor: '#333333'
    },
    formContainer:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderBottomColor: '#333333',
        borderBottomWidth: 10,
        borderLeftWidth: 20,
        borderLeftColor:'#333333',
        borderRightColor:'#333333',
        borderRightWidth: 20,
        borderTopColor: '#333333',
        paddingTop: 0
    },

    formContainer2:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingBottom: 0,
        borderTopWidth: 50,
        borderBottomWidth: 20,
        borderLeftWidth: 20,
        borderLeftColor:'#333333',
        borderRightColor:'#333333',
        borderRightWidth: 20,
        borderBottomColor: '#333333',
        borderTopColor: '#333333',
        paddingTop: 0
    }

});


module.exports = Home;