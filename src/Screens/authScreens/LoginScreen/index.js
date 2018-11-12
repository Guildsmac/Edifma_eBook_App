import React, {Component} from 'react';
import inheritedStyle from '../../styles';
import thisStyle from '../styles';
import {View, Image, Keyboard} from 'react-native';
import Header from '../../../Components/Header/index';
import LoginFirstStep from '../../../Components/LoginSteps/loginFirstStep';
import LoginSecondStep from '../../../Components/LoginSteps/loginSecondStep';
import {connect} from 'react-redux';
import {
    checkUsername,
    backToFirstStep,
    turnActivityIndicatorOn,
    turnActivityIndicatorOff,
    loginAuth
} from "../../../Actions/authActions";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.firstStepButtonCheck = this.firstStepButtonCheck.bind(this);


    };

    onButtonClick = () => {
        Keyboard.dismiss();
        if(!this.props.isOnSecondStep)
            this.props.checkUsername(this.props.username);
        else
            this.props.loginAuth(this.props.username, this.props.senha);
    };

    firstStepButtonCheck = () =>{
        if(this.props.isOnSecondStep)
            return <LoginSecondStep actionBack={this.props.backToFirstStep} action = {this.onButtonClick}/>;
        return <LoginFirstStep error = {this.props.erroLogin} action = {this.onButtonClick} isAnimated = {this.props.wentToSecondStep}/>;

    };

    render() {
        return (
            <View style={inheritedStyle.container}>
                <Header text='LOGIN'/>
                <View style={thisStyle.images}>
                    <Image style={[thisStyle.uniqueImage, {marginRight:30}]} resizeMode='contain' source={require('../../../Images/IFMALogo.png')}/>
                    <Image style={thisStyle.uniqueImage} resizeMode='contain' source={require('../../../Images/EdIFMALogo.png')}/>
                </View>
                <View style={thisStyle.mainContent}>
                    {this.firstStepButtonCheck()}
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    username: state.authReducers.username,
    isOnSecondStep: state.authReducers.isOnSecondStep,
    wentToSecondStep: state.authReducers.wentToSecondStep,
    erroLogin: state.authReducers.erroLogin,
    senha: state.authReducers.senha
});

export default connect(mapStateToProps, {checkUsername,
                                         backToFirstStep,
                                         turnActivityIndicatorOn,
                                         turnActivityIndicatorOff,
                                         loginAuth
})
                                         (LoginScreen);