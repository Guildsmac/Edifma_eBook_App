import {
    ACTIVITY_INDICATOR_ON,
    BACK_TO_FIRST_STEP, CHANGE_CPF, CHANGE_EMAIL, CHANGE_NAME,
    CHANGE_PASSWORD,
    CHANGE_USERNAME,
    CLEAN_ALL,
    CLEAR_CPF_ERRO,
    CLEAR_EMAIL_ERRO,
    CLEAR_USUARIO_ERRO, REGISTER_USER_ERROR, REGISTER_USER_SUCCESS,
    USER_LOGIN_ERROR,
    USER_LOGIN_SUCCESS,
    USERNAME_CHECK_ERROR,
    USERNAME_CHECK_SUCCESS,
    SET_USERNAME_ERROR,
    SET_EMAIL_ERROR,
    SET_CPF_ERROR,
    SWITCH_KEYBOARD

} from "../Actions/actionsTypes";

const INITIAL_STATE = {
    nome: '',
    username: '',
    email: '',
    cpf: '',
    idusuario: '',
    senha: '',
    erroLogin: '',
    erroSenha: '',
    isAuth: false,
    isOnSecondStep: false,
    wentToSecondStep: false,
    isActivityIndicatorOn: false,
    erroUsuario: '',
    erroCpf: '',
    erroEmail: '',
    isKeyboardOn: false

};

export default(state = INITIAL_STATE, action) => {
    switch(action.type){
        case SWITCH_KEYBOARD:
            return {...state, isKeyboardOn: !state.isKeyboardOn};
        case CHANGE_USERNAME:
            return {...state, username: action.payload.text};
        case CHANGE_PASSWORD:
            return {...state, senha: action.payload.text};
        case CLEAN_ALL:
            return INITIAL_STATE;
        case REGISTER_USER_SUCCESS:
            return INITIAL_STATE;
        case REGISTER_USER_ERROR:
            return {...state, isActivityIndicatorOn: false};
        case USERNAME_CHECK_SUCCESS:
            return {...state,
                nome: action.payload.nome,
                idusuario: action.payload.idusuario,
                isOnSecondStep: true,
                wentToSecondStep: true,
                erroLogin: '',
                isActivityIndicatorOn: false
            };
        case SET_EMAIL_ERROR:
            return{...state,
                erroEmail: action.payload.text
            };
        case SET_CPF_ERROR:
            return{...state,
                erroCpf: action.payload.text
            };
        case SET_USERNAME_ERROR:
            return{...state,
                erroUsuario: action.payload.text
            };
        case CHANGE_CPF:
            return{...state,
                cpf: action.payload.text
            };
        case CHANGE_EMAIL:
            return{...state,
                email: action.payload.text
            };
        case CHANGE_NAME:
            return{...state,
                nome: action.payload.text
            };
        case CLEAR_CPF_ERRO:
            return {...state, erroCpf: ''};
        case CLEAR_EMAIL_ERRO:
            return {...state, erroEmail: ''};
        case CLEAR_USUARIO_ERRO:
            return {...state, erroUsuario: ''};
        case USERNAME_CHECK_ERROR:
            return {...state,
                erroLogin: action.payload.erroLogin,
                isActivityIndicatorOn: false,

            };
        case USER_LOGIN_SUCCESS:
            return{...state,
                isAuth: true,
                isActivityIndicatorOn: false
            };
        case USER_LOGIN_ERROR:
            return{...state,
                    erroSenha: action.payload.erroSenha,
                    isActivityIndicatorOn: false};
        case ACTIVITY_INDICATOR_ON:
            return{...state,
                isActivityIndicatorOn: true
            };
        case BACK_TO_FIRST_STEP:
            return {INITIAL_STATE, wentToSecondStep: true};
        default:
            return state;
    }
}