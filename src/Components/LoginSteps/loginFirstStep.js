import thisStyle from "../../Screens/authScreens/styles";
import {Text, TextInput, TouchableOpacity, View, Animated, KeyboardAvoidingView, ActivityIndicator} from "react-native";
import React, {Component} from "react";
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {changePassword, changeUsername} from "../../Actions/authActions";
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
            return (<TouchableOpacity onPress={this.props.action}>
                <View style={thisStyle.button}>
                    <Text style={thisStyle.whiteText}>Prosseguir</Text>
                </View>
            </TouchableOpacity>);
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
            <Animated.View style={animation}>
                <View style={{justifyContent: 'space-evenly', flex: 9, paddingVertical: 80}}>
                    <View style={{marginBottom: 48}}>
                        <Text style={thisStyle.text}>Nome de usuário/email</Text>
                        <TextInput
                            placeholderStyle={thisStyle.inputField}
                            placeholder="Insira aqui"
                            style={thisStyle.inputField}
                            value={this.props.username}
                            onChangeText={(text) => this.props.changeUsername(text)}
                        />
                    </View>
                    <KeyboardAvoidingView enabled={false}>
                        {this.getStatus()}
                    </KeyboardAvoidingView>
                </View>
                <KeyboardAvoidingView enabled={false} style={{flex: 3}}>
                    <Text style={thisStyle.textError}>{this.props.erroLogin}</Text>
                    <View style={thisStyle.errorArea}/>
                    <TouchableOpacity style={{marginTop: 10, flex: 1}} onPress={() => this.buttonRegisterScreen()}>
                        <Text style={thisStyle.link}>Ainda não é cadastrado? Cadastre-se agora!</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            </Animated.View>
        )
    }
}

const mapStateToProps = state => ({
    username: state.authReducers.username,
    erroLogin: state.authReducers.erroLogin,
    isActivityIndicatorOn: state.authReducers.isActivityIndicatorOn

});

export default connect(mapStateToProps, {changeUsername})(LoginFirstStep);