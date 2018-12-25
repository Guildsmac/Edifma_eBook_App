import React, {Component} from 'react';
import {View, Text, TextInput, Animated} from 'react-native';
import styles from './styles.js';
import {PRIMARY_DARK, PRIMARY_LIGHT} from "../../Consts/Colors";
import {PRIMARY_FONT} from "../../Consts/Fonts";

class FloatingInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            isFocused: false
        };
        this._animatedIsFocused = new Animated.Value(0)
    }

    _shouldFloat(){
        console.log('Is focused: ', this.state.isFocused);
        let strLen = 0;
        if(this.props.value)
            strLen = this.props.value.length;
        console.log(strLen);
        if(this.state.isFocused || strLen !== 0)
            return true;
        return false;

    }

    componentWillMount(){
        console.log('willmount');
        this._animatedIsFocused = new Animated.Value(!this.state.isFocused ? 0 : 1);
    }

    componentDidUpdate(){
        console.log('didupdate');
        Animated.timing(this._animatedIsFocused, {
            toValue: (this._shouldFloat()) ? 1 : 0,
            duration:200,
        }).start();

    }

    handleFocus = () => this.setState({isFocused: true});
    handleBlur = () => this.setState({isFocused: false});

    render() {

        const labelStyle = {
            position: 'absolute',
            left: 0,
            top: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [32, 2],
            }),
            fontSize: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [18, 15],
            }),
                color: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [PRIMARY_DARK, '#000'],
            }),

                marginLeft:4,
                opacity: !this.state.isFocused ? 0.8 : 1,
                fontFamily: PRIMARY_FONT,
        };

        const {label, ...props} = this.props;

        return(
            <View style={styles.container}>
                <Animated.Text style={labelStyle}>
                    {label}
                </Animated.Text>
                <TextInput
                    {...props}
                    style={styles.inputStyle}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    blurOnSubmit
                    underlineColorAndroid = 'transparent'
                />
            </View>
         )
    }
}

export default FloatingInput