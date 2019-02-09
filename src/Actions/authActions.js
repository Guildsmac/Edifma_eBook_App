import {
    CHANGE_PASSWORD,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    CHANGE_USERNAME,
    CHANGE_CPF,
    CHANGE_EMAIL,
    CHANGE_NAME,
    USERNAME_CHECK_SUCCESS,
    USERNAME_CHECK_ERROR,
    BACK_TO_FIRST_STEP,
    ACTIVITY_INDICATOR_ON,
    ACTIVITY_INDICATOR_OFF,
    CLEAN_ALL,
    CLEAR_USUARIO_ERRO,
    CLEAR_EMAIL_ERRO,
    CLEAR_CPF_ERRO,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
    REGISTER_USER, SET_CPF_ERROR, SET_EMAIL_ERROR, SET_USERNAME_ERROR, SWITCH_KEYBOARD,
    CONNECT_TO_INTERNET,
    DISCONNECT_FROM_INTERNET
} from "./actionsTypes";
import usernameAuth from "../APIs/usernameAuth";
import userAuth from '../APIs/userAuth';
import {Actions} from 'react-native-router-flux';
import createUser from "../APIs/createUser";


const handleConnectivityChange = isConnected => {
    return dispatch => {
        if(isConnected)
            isConnectedToInternet(dispatch);
        else
            isNotConnectedToInternet(dispatch);
    }
};

const isConnectedToInternet = (dispatch) => {
    dispatch({
        type: CONNECT_TO_INTERNET
    });
};

const isNotConnectedToInternet = (dispatch) => {
    dispatch({
        type: DISCONNECT_FROM_INTERNET
    });
};

const registerUserSucess = (response, dispatch) => {
    alert('Você foi cadastrado com sucesso!');
    Actions.loginScreen();
    dispatch({
        type:REGISTER_USER_SUCCESS,

    })
};

const switchKeyboard = () => {
    return{
        type: SWITCH_KEYBOARD
    }
};

const registerUserError = (error, dispatch) => {
    let errors = error.response ? error.response.data.message : undefined;
    console.log(errors);
    console.log(error.response);
    if(errors){
        if(errors.cpf)
            dispatch({type:SET_CPF_ERROR, payload:{text:errors.cpf}});
        if(errors.email)
            dispatch({type:SET_EMAIL_ERROR, payload:{text:errors.email}});
        if(errors.username)
            dispatch({type:SET_USERNAME_ERROR, payload:{text:errors.username}});

        alert(errors.main);
    }else if(!error.response){
        alert('Erro de conexão');
    }else
        alert('Erro de conexão');
    dispatch({
        type:REGISTER_USER_ERROR,
    })
};

const registerUser = (data) => {
    return createUser(data);
};

const changeCpf = (text) => {
    return {
        type: CHANGE_CPF,
        payload: {
            text
        }
    }
};

const changeEmail = (text) => {
    return {
        type: CHANGE_EMAIL,
        payload: {
            text
        }
    }
};

const changeName = (text) => {
    return {
        type: CHANGE_NAME,
        payload: {
            text
        }
    }
};

const changeUsername = (text) => {
    return {
        type: CHANGE_USERNAME,
        payload: {
            text
        }
    };
};

const clearUsuarioErro = () => {
    return {
        type: CLEAR_USUARIO_ERRO
    }
};

const clearEmailErro = () => {
    return {
        type: CLEAR_EMAIL_ERRO
    }
};

const clearCpfErro = () => {
    return {
        type: CLEAR_CPF_ERRO
    }
};

const cleanAll = () => {
    return {
        type: CLEAN_ALL,
    }
};

const loginAuth = (username, password) => {
    return userAuth(username, password)
};

const authUserSuccess = (response, dispatch) => {
    dispatch({
        type: USER_LOGIN_SUCCESS,

    });
    Actions.dashboard();
};

const authUserError = (error, dispatch) => {
    let erroSenha;
    if(error.response)
        erroSenha = error.response.data.message;
    else
        erroSenha = 'Erro de Conexão.';

    dispatch({
        type: USER_LOGIN_ERROR,
        payload: {
            erroSenha
        }

    });
};

const backToFirstStep = () => {
    return {
        type: BACK_TO_FIRST_STEP,
    }
};

const turnActivityIndicatorOn = () => {
    return {
        type: ACTIVITY_INDICATOR_ON
    }
};

const turnActivityIndicatorOff = () => {
    return {
        type: ACTIVITY_INDICATOR_OFF
    }
};

const changePassword = (text) => {
    return {
        type: CHANGE_PASSWORD,
        payload: {
            text
        }
    };
};

const checkUsername = (username) => {
    return usernameAuth(username);
};

const checkUsernameSuccess = (response, dispatch) => {
    dispatch({
        type: USERNAME_CHECK_SUCCESS,
        payload: {
            idusuario: response.data.payload[0].idusuario,
            nome: response.data.payload[0].nome,

        }
    });

};

const checkUsernameError = (error, dispatch) => {
    let errorMessage;
    if(error.response)
        errorMessage = error.response.data.message ? error.response.data.message : "Erro de conexão";
    else
        errorMessage = "Erro de Conexão.";
    dispatch({
        type: USERNAME_CHECK_ERROR,
        payload: {
            erroLogin: errorMessage
        }
    });
};

export {
    registerUser,
    registerUserError,
    registerUserSucess,
    changeCpf,
    changeEmail,
    changeName,
    clearCpfErro,
    clearEmailErro,
    clearUsuarioErro,
    cleanAll,
    authUserError,
    authUserSuccess,
    loginAuth,
    changePassword,
    changeUsername,
    checkUsername,
    checkUsernameError,
    checkUsernameSuccess,
    backToFirstStep,
    turnActivityIndicatorOff,
    turnActivityIndicatorOn,
    switchKeyboard,
    handleConnectivityChange
};