import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import LoginScreen from './src/Screens/authScreens/LoginScreen/index';
import RegisterScreen from "./src/Screens/authScreens/RegisterScreen";
import Dashboard from "./src/Screens/MainScreens/Dashboard";


export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Stack key = 'login' hideNavBar>
                    <Scene key = 'loginScreen' component = {LoginScreen} initial title="Login"/>
                    <Scene key = 'registerScreen' component = {RegisterScreen} title="Register"/>
                    <Scene key = 'dashboard' component = {Dashboard}  title="Dashboard"/>
                </Stack>
            </Router>
        )
    }
}
