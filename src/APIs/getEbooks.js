import {MANAGE_EBOOKS_REQUEST} from '../Consts/APIsRequests';
import axios from 'axios';
import {
    fetchEbooksSuccess,
    fetchEbooksError,
} from "../Actions/mainActions";
import {ACTIVITY_INDICATOR_ON, SWITCH_REFRESHING} from "../Actions/actionsTypes";

const getEbooks = (idusuario) => {
    return dispatch => {
        dispatch({type: ACTIVITY_INDICATOR_ON});
        axios.get(MANAGE_EBOOKS_REQUEST, {
            headers:{
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            },
            params:{
                idusuario: idusuario
            }
        }).then(response => {
            dispatch({type: SWITCH_REFRESHING});
            fetchEbooksSuccess(response, dispatch);
        }).catch(error => {
            fetchEbooksError(error, dispatch);
        }, 200);
    }
};

export default getEbooks;