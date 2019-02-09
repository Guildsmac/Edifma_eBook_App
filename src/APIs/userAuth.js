import {AUTH_USER_REQUEST} from '../Consts/APIsRequests';
import axios from 'axios';
import {
    authUserSuccess,
    authUserError,
} from "../Actions/authActions";
import {ACTIVITY_INDICATOR_ON} from "../Actions/actionsTypes";

const userAuth = (username, password) => {
    return dispatch => {
        dispatch({type: ACTIVITY_INDICATOR_ON});
        axios.post(AUTH_USER_REQUEST, {
            username,
            password
        }).then(response => {
            authUserSuccess(response, dispatch)
        }).catch(error => {
            authUserError(error, dispatch)
        });

    }
};

export default userAuth;