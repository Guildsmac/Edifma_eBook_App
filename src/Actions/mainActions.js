import{FETCH_EBOOKS_ERROR, FETCH_EBOOKS_SUCCESS, FETCH_PROTECTED_EBOOK_ERROR, FETCH_PROTECTED_EBOOK_SUCCESS} from "./actionsTypes";

import getEbooks from '../APIs/getEbooks'
import getProtectedEbook from '../APIs/getProtectedEbook';
const fetchEbooks = () => {
    return getEbooks();
};

const downloadEbook = (idusuario, idebook) => {
    return dispatch => {
        let s = fetchProtectedEbook(idusuario, idebook);
        console.log(s);
    }
};

const fetchProtectedEbook = (idusuario, idebook) => {
    return getProtectedEbook(idusuario, idebook);
};

const fetchProtectedEbookSuccess = (response, dispatch) => {

    dispatch({type: FETCH_PROTECTED_EBOOK_SUCCESS, payload:{response}});
};

const fetchProtectedEbookError = (response, dispatch) => {
    dispatch({type: FETCH_PROTECTED_EBOOK_ERROR, payload:{response}});
};

const fetchEbooksSuccess = (response, dispatch) => {
    dispatch({type: FETCH_EBOOKS_SUCCESS, payload:{response}});
};

const fetchEbooksError = (error, dispatch) => {
    dispatch({type: FETCH_EBOOKS_ERROR, payload:{error}});
};

export{downloadEbook, fetchEbooks, fetchEbooksError, fetchEbooksSuccess, fetchProtectedEbookError, fetchProtectedEbookSuccess, fetchProtectedEbook};