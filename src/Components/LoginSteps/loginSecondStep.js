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
import {changePassword} from "../../Actions/authActions";
import {PRIMARY_DARK} from "../../Consts/Colors";

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
            return (<View>
                        <TouchableOpacity onPress={this.props.action}>
                            <View style={thisStyle.button}>
                                <Text style={thisStyle.whiteText}>Prosseguir</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.props.actionBack}>
                            <View style={thisStyle.backButton}>
                                <Text style={thisStyle.whiteText}>Voltar</Text>
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
                            style={[thisStyle.bigText, {marginBottom: 12}]}>Olá, {this.props.nome.split(' ')[0]}</Text>
                        <Text style={thisStyle.text}>Senha</Text>
                        <TextInput
                            placeholderStyle={thisStyle.inputField}
                            placeholder="Insira aqui"
                            secureTextEntry = {true}
                            style={thisStyle.inputField}
                            value={this.props.senha}
                            onChangeText={(text) => this.props.changePassword(text)}
                        />
                    </View>
                    <KeyboardAvoidingView enabled={false}>
                        <Text style={thisStyle.textError}>{this.props.erroSenha}</Text>
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

export default connect(mapStateToProps, {changePassword})(LoginSecondStep);