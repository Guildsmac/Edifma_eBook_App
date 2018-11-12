import React, {Component} from 'react';
import {View, Text, BackHandler} from 'react-native';
import {cleanAll} from "../../Actions/authActions";
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

class Dashboard extends Component{

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.cleanAll();
        Actions.loginScreen();
        return true;
    };

    render() {
        return(
            <View>
                <Text>Dashboard!</Text>
            </View>
         )
    }
}

export default connect(null, {cleanAll})(Dashboard);