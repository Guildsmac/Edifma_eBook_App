import thisStyle from "../../Screens/authScreens/styles";
import {
    Animated,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    BackHandler, ActivityIndicator, KeyboardAvoidingView
} from "react-native";
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
            return (<View style={{flexDirection: 'row'}}>


                        <TouchableOpacity onPress={this.props.actionBack} style={[thisStyle.backButton, {flex:1.25}]}>
                            <View >
                                <Text style={thisStyle.secondaryText}>Voltar</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.action} style={[thisStyle.button, {flex:2, marginLeft:8}]}>
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
                <View style={{justifyContent: 'space-between', flex: 6, paddingVertical: 80}}>
                    <View style={{justifyContent: 'space-between'}}>
                        <Text
                            style={[thisStyle.bigText, {marginBottom: 12}]}>Olá, {this.props.nome.split(' ')[0]}
                        </Text>
                        <FloatingInput
                            label="Senha"
                            value={this.props.senha}
                            onChangeText = {(text) => this.props.changePassword(text)}
                            secureTextEntry
                        />
                    </View>
                    <KeyboardAvoidingView enabled={false}>
                        <Text style={thisStyle.textErrorBig}>{this.props.erroSenha}</Text>
                        {this.getStatus()}
                    </KeyboardAvoidingView>

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