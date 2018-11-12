import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import styles from './style';

class RegisterField extends Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Text style={styles.leftLabel}> {this.props.text} </Text>
                </View>
                <View style={styles.verticalLine}/>
                <View style={styles.rightContainer}>
                    <TextInput
                        placeholder={this.props.placeholder}
                        onFocus = {() => {this.props.focusAction()}}
                        placeholderStyle={styles.textInput}
                        secureTextEntry={this.props.password}
                        value={this.props.value}
                        onChangeText={(text) => this.props.changeTextAction(text)}
                    />
                </View>
            </View>
         )
    }
}

export default RegisterField