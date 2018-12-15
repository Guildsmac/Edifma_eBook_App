import React, {Component} from 'react';
import inheritedStyle from '../../styles';
import thisStyle from '../styles';
import {Image, Keyboard, PermissionsAndroid, View} from 'react-native';
import {requestStoragePermission} from '../../../auxilliaryFunctions';
import LoginFirstStep from '../../../Components/LoginSteps/loginFirstStep';
import LoginSecondStep from '../../../Components/LoginSteps/loginSecondStep';
import {connect} from 'react-redux';
import {
    backToFirstStep,
    checkUsername,
    cleanAll,
    loginAuth,
    switchKeyboard,
    turnActivityIndicatorOff,
    turnActivityIndicatorOn
} from "../../../Actions/authActions";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.firstStepButtonCheck = this.firstStepButtonCheck.bind(this);
        this.state = {
            isAllowed: false,

        }

    };

    componentWillMount() {
        this._getStatus();
    }

    onButtonClick = () => {
        Keyboard.dismiss();
        if (!this.props.isOnSecondStep)
            this.props.checkUsername(this.props.username);
        else
            this.props.loginAuth(this.props.username, this.props.senha);
    };

    firstStepButtonCheck = () => {
        if (this.props.isOnSecondStep)
            return <LoginSecondStep actionBack={this.props.backToFirstStep} action={this.onButtonClick}/>;
        return <LoginFirstStep error={this.props.erroLogin} action={this.onButtonClick}
                               isAnimated={this.props.wentToSecondStep}/>;

    };

    _getStatus = () => {
        if (PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)) {
            requestStoragePermission()
                .then(response => {
                    if (response)
                        this.setState({isAllowed: true});
                    else
                        this._getStatus();

                }).catch(error => {
                alert('Erro Desconhecido!');
                console.log(error);
            });
        } else
            this.setState({isAllowed: true})

    };

    render() {
        if (this.state.isAllowed)
            return (<View style={[inheritedStyle.container]}>
                <View style={[thisStyle.images, {marginTop: 12}]}>
                    <Image style={[thisStyle.uniqueImage, {marginRight: 30}]} resizeMode='contain'
                           source={require('../../../Images/IFMALogo.png')}/>
                    <Image style={thisStyle.uniqueImage} resizeMode='contain'
                           source={require('../../../Images/EdIFMALogo.png')}/>
                </View>
                <View style={[thisStyle.mainContent, {}]}>
                    {this.firstStepButtonCheck()}
                </View>
            </View>);
        return (
            <View></View>
        );
    }
}

const mapStateToProps = state => ({
    username: state.authReducers.username,
    isOnSecondStep: state.authReducers.isOnSecondStep,
    wentToSecondStep: state.authReducers.wentToSecondStep,
    erroLogin: state.authReducers.erroLogin,
    senha: state.authReducers.senha,
    isKeyboardOn: state.authReducers.isKeyboardOn
});

export default connect(mapStateToProps, {
    checkUsername,
    backToFirstStep,
    turnActivityIndicatorOn,
    turnActivityIndicatorOff,
    loginAuth,
    switchKeyboard,
    cleanAll
})(LoginScreen);