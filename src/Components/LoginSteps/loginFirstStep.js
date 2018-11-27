import thisStyle from "../../Screens/authScreens/styles";
import {Text, TextInput, TouchableOpacity, View, Animated, KeyboardAvoidingView, ActivityIndicator} from "react-native";
import React, {Component} from "react";
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {changePassword, changeUsername, cleanAll} from "../../Actions/authActions";
import {PRIMARY_DARK} from "../../Consts/Colors";

class LoginFirstStep extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibility: new Animated.Value(0)
        }

    }

    componentDidMount(){
        Animated.timing(this.state.visibility, {
            toValue: 1,
            duration: 375,
        }).start();

    }

    getStatus(){
        if(this.props.isActivityIndicatorOn)
            return <ActivityIndicator size = "large" color = {PRIMARY_DARK}/>;
        else
            return (<View style={{flexDirection:'row', alignItems:'center',justifyContent: 'space-evenly'}}>
                <TouchableOpacity onPress={() => this.buttonRegisterScreen()} style={[thisStyle.secondaryButton, {flex:1.25, marginRight:10}]}>
                    <Text style={thisStyle.whiteText}>Cadastrar-se</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.action} style={[thisStyle.button,{ flex:2}]}>
                    <Text style={thisStyle.whiteText}>Prosseguir</Text>
                </TouchableOpacity>
            </View>);
    }

    buttonRegisterScreen = () => {
        Actions.registerScreen();

    };

    render() {
        let animation = {};
        if(this.props.isAnimated)
            animation = {
                opacity: this.state.visibility.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                }), // interpolate opacity
                transform: [
                    {
                        translateX: this.state.visibility.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-50, 0],
                        }), // interpolate translateX to create a fade in left/right
                    },
                ],
            };


        return (
            <Animated.View style={[animation, {width:'100%', flex:1}]}>
                <View style={{ flex: 1 }}>
                    <View style={{flex:2, justifyContent:'center'}}>
                        <Text style={[thisStyle.text, {marginLeft:2 }]}>Nome de usuário/email</Text>
                        <TextInput
                            placeholder="Insira aqui"
                            style={[thisStyle.inputField,]}
                            value={this.props.username}
                            onChangeText={(text) => this.props.changeUsername(text)}
                        />
                    </View>
                    <KeyboardAvoidingView enabled={false} style={{flex:1}}>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Text style={thisStyle.textError}>{this.props.erroLogin}</Text>
                        </View>
                        <View style={{flex:3}}>
                            {this.getStatus()}
                        </View>
                    </KeyboardAvoidingView>
                </View>


            </Animated.View>
        )
    }
}

const mapStateToProps = state => ({
    username: state.authReducers.username,
    erroLogin: state.authReducers.erroLogin,
    isActivityIndicatorOn: state.authReducers.isActivityIndicatorOn,
    isKeyboardOn: state.authReducers.isKeyboardOn

});

export default connect(mapStateToProps, {changeUsername, cleanAll})(LoginFirstStep);