import {MANAGE_EBOOKS_REQUEST} from '../Consts/APIsRequests';
import axios from 'axios';
import {
    fetchEbooksSuccess,
    fetchEbooksError,
} from "../Actions/mainActions";
import {ACTIVITY_INDICATOR_ON} from "../Actions/actionsTypes";

const getEbooks = () => {
    return dispatch => {
        dispatch({type: ACTIVITY_INDICATOR_ON});
        axios.get(MANAGE_EBOOKS_REQUEST, {
        }).then(response => {
            fetchEbooksSuccess(response, dispatch);
        }).catch(error => {
            fetchEbooksError(error, dispatch);
        }, 200);
    }
};

export default getEbooks;