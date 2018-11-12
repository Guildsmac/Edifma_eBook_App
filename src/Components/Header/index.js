import React, {Component} from 'react';
import styles from './styles'
import {View, Text} from 'react-native';

class Header extends Component{

    constructor(props){
        super(props);
    };

    render(){
        return(
            <View style ={[styles.container]}>
                <Text style={styles.text}> {this.props.text} </Text>
            </View>
        );
    }
}

export default Header;