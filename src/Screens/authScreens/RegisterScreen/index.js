import React, {Component} from 'react'
import {Animated, View, TouchableOpacity, Text, KeyboardAvoidingView, ActivityIndicator} from 'react-native'
import Header from "../../../Components/Header";
import RegisterField from "../../../Components/RegisterField";
import inheritedStyle from '../../styles';
import pageStyles from '../styles';
import {Actions} from "react-native-router-flux";
import {connect} from 'react-redux';
import {
    changeCpf, changeEmail, changeName,
    changePassword,
    changeUsername,
    clearCpfErro,
    clearEmailErro,
    clearUsuarioErro, registerUser
} from "../../../Actions/authActions";
import createUser from "../../../APIs/createUser";
import {PRIMARY_DARK} from "../../../Consts/Colors";


class RegisterScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibility: new Animated.Value(0)
        }
    }

    backButtonPress() {
        Actions.pop();
    }

    componentDidMount() {
        Animated.timing(this.state.visibility, {
            toValue: 1,
            duration: 375
        }).start();
    }

    getStatus(){
        if(this.props.isActivityIndicatorOn)
            return <ActivityIndicator size = "large" color = {PRIMARY_DARK}/>;
        else return(<KeyboardAvoidingView enabled={false}
                                          style={{flexDirection: 'row', justifyContent: 'space-around', width: '80%'}}>
            <TouchableOpacity onPress={() => this.backButtonPress()} style={{width: '30%'}}>
                <View style={pageStyles.backButton}>
                    <Text style={pageStyles.whiteText}>Voltar</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '60%'}} onPress={() => this.props.registerUser({nome: this.props.nome, username: this.props.username,
                email:this.props.email, cpf:this.props.cpf, senha: this.props.senha})}>
                <View style={pageStyles.button}>
                    <Text style={pageStyles.whiteText}>CONFIRMAR</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>)

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
            <View style={inheritedStyle.container}>
                <Header text='CADASTRO'/>
                <Animated.View style={[animation, pageStyles.mainContent, {flex: 14, justifyContent: 'space-evenly'}]}>
                    <View>
                        <RegisterField text='Nome' focusAction={() => {
                        }} value={this.props.nome} changeTextAction={this.props.changeName}
                                       placeholder='Insira seu nome aqui'/>
                        <Text></Text>
                    </View>
                    <View>
                        <RegisterField text='Usuário' value={this.props.username}
                                       changeTextAction={this.props.changeUsername}
                                       placeholder='Insira seu nome de usuário aqui'
                                       focusAction={this.props.clearUsuarioErro}/>
                        <Text style={pageStyles.textError}>{this.props.erroUsuario}</Text>
                    </View>
                    <View>
                        <RegisterField text='Email' value={this.props.email} changeTextAction={this.props.changeEmail}
                                       placeholder='Insira seu email aqui' focusAction={this.props.clearEmailErro}/>
                        <Text style={pageStyles.textError}>{this.props.erroEmail}</Text>
                    </View>
                    <View>
                        <RegisterField text='CPF' value={this.props.cpf} changeTextAction={this.props.changeCpf}
                                       placeholder='Insira seu CPF aqui' focusAction={this.props.clearCpfErro}/>
                        <Text style={pageStyles.textError}>{this.props.erroCpf}</Text>
                    </View>
                    <View>
                        <RegisterField text='Senha' value={this.props.senha}
                                       changeTextAction={this.props.changePassword} placeholder='Insira sua senha aqui'
                                       password={true} focusAction={this.props.clearCpfErro}/>
                        <Text></Text>
                    </View>
                    {this.getStatus()}
                </Animated.View>

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    nome: state.authReducers.nome,
    username: state.authReducers.username,
    email: state.authReducers.email,
    cpf: state.authReducers.cpf,
    senha: state.authReducers.senha,
    erroUsuario: state.authReducers.erroUsuario,
    erroEmail: state.authReducers.erroEmail,
    erroCpf: state.authReducers.erroCpf,
    isActivityIndicatorOn: state.authReducers.isActivityIndicatorOn
});

export default connect(mapStateToProps, {
    clearUsuarioErro,
    clearEmailErro,
    clearCpfErro,
    changeUsername,
    changePassword,
    changeCpf,
    changeName,
    changeEmail,
    registerUser
})(RegisterScreen);