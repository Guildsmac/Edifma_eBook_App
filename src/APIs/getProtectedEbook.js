import {MANAGE_PROTECTED_EBOOKS_REQUEST} from "../Consts/APIsRequests";
import axios from 'axios';
import{
    fetchProtectedEbookError,
    fetchProtectedEbookSuccess
} from "../Actions/mainActions";
import {ACTIVITY_INDICATOR_ON} from "../Actions/actionsTypes";

const getProtectedEbook = (usuario_idusuario, e_book_ide_book, download) => {
    return dispatch => {
        dispatch({type: ACTIVITY_INDICATOR_ON});
        axios.post(MANAGE_PROTECTED_EBOOKS_REQUEST, {
            usuario_idusuario,
            e_book_ide_book
        }).then(response => {
            fetchProtectedEbookSuccess(response, dispatch, download);
        }).catch(error => {
            alert(error.response.data.message);
            fetchProtectedEbookError(error, dispatch);
        }, 200)
    }
};

export default getProtectedEbook;