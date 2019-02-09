import {CHECK_USERNAME_REQUEST} from '../Consts/APIsRequests';
import axios from 'axios';
import {
    checkUsernameError,
    checkUsernameSuccess,
} from "../Actions/authActions";
import {ACTIVITY_INDICATOR_ON} from "../Actions/actionsTypes";

const usernameAuth = (username) => {
    return dispatch => {

        dispatch({type: ACTIVITY_INDICATOR_ON});
        axios.post(CHECK_USERNAME_REQUEST, {
            username
        }, {timeout:100}).then(response => {
            checkUsernameSuccess(response, dispatch);
        }).catch(error => {
            checkUsernameError(error, dispatch);
        });

    }
};

export default usernameAuth;