import React, {Component} from 'react';
import {View, Text, TextInput, Animated} from 'react-native';
import styles from './styles.js';
import {PRIMARY_DARK, PRIMARY_LIGHT, PRIMARY_NORMAL} from "../../Consts/Colors";
import {PRIMARY_FONT} from "../../Consts/Fonts";

class FloatingInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            isFocused: false
        };
        this._animatedIsFocused = new Animated.Value(0);
    }

    _shouldFloat(){
        let strLen = 0;
        if(this.props.value)
            strLen = this.props.value.length;
        if(this.state.isFocused || strLen !== 0)
            return true;
        return false;

    }

    componentWillMount(){
        this._animatedIsFocused = new Animated.Value(!this.state.isFocused ? 0 : 1);
    }

    componentDidUpdate(){
        Animated.timing(this._animatedIsFocused, {
            toValue: (this._shouldFloat()) ? 1 : 0,
            duration:200,
        }).start();

    }

    componentDidMount(){
        Animated.timing(this._animatedIsFocused, {
            toValue: (this._shouldFloat()) ? 1 : 0,
            duration:200,
        }).start();
    }

    handleFocus = () => {
        if(this.props.onFocus)
            this.props.onFocus();

        this.setState({isFocused: true})
    };
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

        const animatedBorderStyle={
            borderBottomColor: this._animatedIsFocused.interpolate({
                inputRange:[0,1],
                outputRange:[PRIMARY_NORMAL, '#555']
            }),
            borderBottomWidth: this._animatedIsFocused.interpolate({
                inputRange:[0,1],
                outputRange:[1, 1.5]
            })
        };

        const {label, ...props} = this.props;
        return(
            <Animated.View style={[styles.container, animatedBorderStyle]}>
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
            </Animated.View>
         )
    }
}

export default FloatingInput