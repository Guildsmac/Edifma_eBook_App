import thisStyle from "../../Screens/authScreens/styles";
import {ActivityIndicator, Animated, BackHandler, Text, TouchableOpacity, View} from "react-native";
import React, {Component} from "react";
import {connect} from 'react-redux';
import {changePassword, cleanAll} from "../../Actions/authActions";
import {PRIMARY_DARK} from "../../Consts/Colors";
import FloatingInput from '../FloatingInput';

class LoginSecondStep extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibility: new Animated.Value(0)
        }
    };

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        Animated.timing(this.state.visibility, {
            toValue: 1,
            duration: 375,
        }).start();
    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    };

    handleBackPress = () => {
        this.props.actionBack(); // works best when the goBack is async
        return true;
    };

    getStatus() {
        if (this.props.isActivityIndicatorOn)
            return <ActivityIndicator size="large" color={PRIMARY_DARK}/>;
        else
            return (<View style={{flexDirection: 'row', alignItems:'center',justifyContent: 'space-evenly'}}>


                <TouchableOpacity onPress={this.props.actionBack} style={[thisStyle.secondaryButton, {flex: 1.25}]}>
                    <View>
                        <Text style={thisStyle.secondaryText}>Voltar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.action} style={[thisStyle.button, {flex: 2, marginLeft: 8}]}>
                    <View>
                        <Text style={thisStyle.primaryText}>Prosseguir</Text>
                    </View>
                </TouchableOpacity>
            </View>)

    }

    render() {
        const animation = {
            opacity: this.state.visibility.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
            }), // interpolate opacity
            transform: [
                {
                    translateX: this.state.visibility.interpolate({
                        inputRange: [0, 1],
                        outputRange: [50, 0],
                    }), // interpolate translateX to create a fade in left/right
                },
            ],
        };

        return (
            <Animated.View style={[animation, {width: '100%', flex: 1}]}>
                <View style={{justifyContent: 'space-between', flex: 6}}>
                    <View style={{justifyContent: 'center', flex: 2}}>
                        <Text
                            style={[thisStyle.bigText, {marginBottom: 12}]}>Olá, {this.props.nome.split(' ')[0]}
                        </Text>
                        <FloatingInput
                            label="Senha"
                            value={this.props.senha}
                            onChangeText={(text) => this.props.changePassword(text)}
                            secureTextEntry
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={thisStyle.textErrorBig}>{this.props.erroSenha}</Text>
                        </View>
                        <View style={{flex: 3}}>
                            {this.getStatus()}
                        </View>
                    </View>
                </View>
            </Animated.View>
        )
    }
}

const mapStateToProps = (state) => ({
    senha: state.authReducers.senha,
    nome: state.authReducers.nome,
    isActivityIndicatorOn: state.authReducers.isActivityIndicatorOn,
    erroSenha: state.authReducers.erroSenha

});

export default connect(mapStateToProps, {changePassword, cleanAll})(LoginSecondStep);