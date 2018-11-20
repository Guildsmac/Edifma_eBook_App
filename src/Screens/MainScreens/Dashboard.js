import React, {Component} from 'react';
import {View, Text, BackHandler} from 'react-native';
import {cleanAll} from "../../Actions/authActions";
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import inheritStyle from '../styles';
import styles from './styles';
import MenuButton from '../../Components/MenuButton';

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
            <View style = {inheritStyle.container}>
                <View style ={styles.northArea}>
                    <MenuButton/>
                    <MenuButton/>
                    <MenuButton/>
                </View>
                <View style={styles.southArea}>

                </View>
            </View>
         )
    }
}

export default connect(null, {cleanAll})(Dashboard);