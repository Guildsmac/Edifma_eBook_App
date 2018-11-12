/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StatusBar, StatusBarIOS, Platform, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Routes from './Routes';
import ReduxThunk from 'redux-thunk'
import {PRIMARY_DARK} from "./src/Consts/Colors";
import reducers from './src/Reducers';


export default class App extends Component {

    constructor(props){
        super(props);
    }

    getStatusBar = () => {
        if (Platform.OS === 'ios')
            return (<StatusBarIOS/>);
        return <StatusBar
            backgroundColor={PRIMARY_DARK}
        />
    };

    render() {

        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <View style={{flex: 1}}>
                    {this.getStatusBar()}
                    <Routes/>
                </View>

            </Provider>

    );
    }
}