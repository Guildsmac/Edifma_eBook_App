import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

class MenuButton extends Component{

    constructor(props){
        super(props);

    }

    render() {
        return(
            <TouchableOpacity style = {styles.container} onPress ={this.props.action}>
                <View style={styles.leftContainer}>
                    <Text style={styles.buttonText}>
                        {this.props.text}
                    </Text>
                </View>
                <View style={styles.verticalLine}>
                </View>
                <View style={styles.rightContainer}>
                    <Image style={styles.imageIcon} source={require('../../Images/arrow-right.png')}/>
                </View>
            </TouchableOpacity>
         )
    }
}

export default MenuButton