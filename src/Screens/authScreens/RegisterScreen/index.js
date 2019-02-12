import React, {Component} from 'react'
import {Animated, View, TouchableOpacity, Text, KeyboardAvoidingView, ActivityIndicator, Keyboard} from 'react-native'
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
import FloatingInput from "../../../Components/FloatingInput";


class RegisterScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibility: new Animated.Value(0),
            isKeyboardOpen: false
        };
        this.toggleKeyboard = this.toggleKeyboard.bind(this);
    }

    componentWillMount () {
        console.log('this', this.state);
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {this._keyboardDidShow(this)});
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {this._keyboardDidHide(this)});
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    toggleKeyboard(){
        this.setState({isKeyboardOpen: !this.state.isKeyboardOpen});
    }

    _keyboardDidShow (thisClass) {
        thisClass.toggleKeyboard();
    }

    _keyboardDidHide (thisClass) {
        thisClass.toggleKeyboard();
    }

    backButtonPress() {
        Actions.pop();
    }

    componentDidMount() {
        Animated.timing(this.state.visibility, {
            toValue: 1,
            duration: 500
        }).start();
    }

    getStatus(){
        if(this.props.isActivityIndicatorOn)
            return <ActivityIndicator size = "large" color = {PRIMARY_DARK}/>;
        else if(this.state.isKeyboardOpen)
            return <View></View>;
        else return(<View
                                          style={{flex:2,flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.backButtonPress()} style={[pageStyles.secondaryButton, {flex:1.25, marginRight:10, height:50}]}>
                <View>
                    <Text style={pageStyles.secondaryText}>Voltar</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[{flex:2, height:50}, pageStyles.button]} onPress={() => this.props.registerUser({nome: this.props.nome, username: this.props.username,
                email:this.props.email, cpf:this.props.cpf, senha: this.props.senha})}>
                <View style={[]}>
                    <Text style={pageStyles.whiteText}>CONFIRMAR</Text>
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
            <KeyboardAvoidingView enabled={false} style={inheritedStyle.container}>
                <Animated.View style={[animation, pageStyles.mainContent, ]}>
                    <View style={{flex: 14, justifyContent: 'space-between', marginTop:12, marginBottom:36 }}>
                    <View style={{flex: 1, width:350}}>
                        <FloatingInput
                            label="Nome"
                            value={this.props.nome}
                            onChangeText = {(text) => this.props.changeName(text)}

                        />
                        {/*<RegisterField text='Nome' focusAction={() => {
                        }} value={this.props.nome} changeTextAction={this.props.changeName}
                                       placeholder='Insira seu nome aqui'/>*/}
                        <Text></Text>
                    </View>
                    <View style={{flex:1}}>
                        <FloatingInput
                            label="Usuário"
                            value={this.props.username}
                            onChangeText = {(text) => this.props.changeUsername(text)}
                            onFocus = {() => {this.props.clearUsuarioErro()}}
                        />
                        {/*<RegisterField text='Usuário' value={this.props.username}
                                       changeTextAction={this.props.changeUsername}
                                       placeholder='Insira seu nome de usuário aqui'
                                       focusAction={this.props.clearUsuarioErro}/>*/}
                        <Text style={pageStyles.textError}>{this.props.erroUsuario}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <FloatingInput
                            label="Email"
                            value={this.props.email}
                            onChangeText = {(text) => this.props.changeEmail(text)}
                            onFocus = {() => {this.props.clearEmailErro()}}
                        />
                        {/*<RegisterField text='Email' value={this.props.email} changeTextAction={this.props.changeEmail}
                                       placeholder='Insira seu email aqui' focusAction={this.props.clearEmailErro}/>*/}
                        <Text style={pageStyles.textError}>{this.props.erroEmail}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <FloatingInput
                            label="CPF"
                            value={this.props.cpf}
                            onChangeText = {(text) => this.props.changeCpf(text)}
                            onFocus={() => {this.props.clearCpfErro()}}
                        />
                        {/*<RegisterField text='CPF' value={this.props.cpf} changeTextAction={this.props.changeCpf}
                                       placeholder='Insira seu CPF aqui' focusAction={this.props.clearCpfErro}/>*/}
                        <Text style={pageStyles.textError}>{this.props.erroCpf}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <FloatingInput
                            label="Senha"
                            secureTextEntry
                            value={this.props.senha}
                            onChangeText = {(text) => this.props.changePassword(text)}
                            onFocus={() => {this.props.clearCpfErro()}}
                        />
                        {/*<RegisterField text='Senha' value={this.props.senha}
                                       changeTextAction={this.props.changePassword} placeholder='Insira sua senha aqui'
                                       password={true} focusAction={this.props.clearCpfErro}/>*/}
                        <Text></Text>
                    </View>
                    </View>
                    {this.getStatus()}
                </Animated.View>

            </KeyboardAvoidingView>
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