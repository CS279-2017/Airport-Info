import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet } from 'react-native';

import firsttimeuser from './AndroidComponents/firsttimeuser';


class TRVLR extends Component {

    renderScene(route, navigator) {
        return <route.component {...route.passProps} navigator={navigator}/>
    }

    configureScene (route, routeStack){
        if(route.type === 'Modal'){
            return Navigator.SceneConfigs.FloatFromBottom
        }
        return Navigator.SceneConfigs.PushFromRight
    }

    render(){
        return (
            <Navigator
                configureScene={this.configureScene.bind(this)}
                renderScene={this.renderScene.bind(this)}

                initialRoute={{
                    component: firsttimeuser,
                }}/>

        );
    }
}

const styles = StyleSheet.create({
    navigationContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});

AppRegistry.registerComponent('TRVLR', () => TRVLR);
