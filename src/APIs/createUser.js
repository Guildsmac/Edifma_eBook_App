import {MANAGE_USER_REQUEST} from '../Consts/APIsRequests';
import axios from 'axios';
import {
    registerUserError,
    registerUserSucess,
} from "../Actions/authActions";
import {ACTIVITY_INDICATOR_ON} from "../Actions/actionsTypes";

const createUser = (data) => {
    return dispatch => {
        dispatch({type: ACTIVITY_INDICATOR_ON});
        axios.post(MANAGE_USER_REQUEST, {
            nome: data.nome,
            username: data.username,
            email: data.email,
            cpf: data.cpf,
            password: data.senha
        }).then(response => {
            registerUserSucess(response, dispatch)
        }).catch(error => {
            registerUserError(error, dispatch)
        }, 200);

    }
};

export default createUser;