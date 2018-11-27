import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import LoginScreen from './src/Screens/authScreens/LoginScreen/index';
import RegisterScreen from "./src/Screens/authScreens/RegisterScreen";
import Dashboard from "./src/Screens/MainScreens/Dashboard";
import Acervo from "./src/Screens/MainScreens/Acervo";
import About from "./src/Screens/MainScreens/Acervo";
import Links from "./src/Screens/MainScreens/Links";


export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Stack key = 'login' hideNavBar>
                    <Scene key = 'loginScreen' component = {LoginScreen} initial title="Login"/>
                    <Scene key = 'registerScreen' component = {RegisterScreen} title="Register"/>
                    <Scene key = 'dashboard' component = {Dashboard}  title="Dashboard"/>
<<<<<<< HEAD
                    <Scene key = 'acervo' component = {Acervo} title = "Acervo"/>
                    <Scene key = 'about' component = {About} title = "Sobre"/>
                    <Scene key = 'links' component = {Links} title = "Links"/>
=======
>>>>>>> 282ea5a34765ba572e4d74c15fab624827a7cbec
                </Stack>
            </Router>
        )
    }
}
