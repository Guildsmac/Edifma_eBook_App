import{FETCH_EBOOKS_ERROR, FETCH_EBOOKS_SUCCESS, FETCH_PROTECTED_EBOOK_ERROR, FETCH_PROTECTED_EBOOK_SUCCESS} from "./actionsTypes";
import {download as downloadFile} from "../auxilliaryFunctions";

import getEbooks from '../APIs/getEbooks'
import getProtectedEbook from '../APIs/getProtectedEbook';

const fetchEbooks = (idusuario) => {
    return getEbooks(idusuario);
};

const fetchProtectedEbook = (idusuario, idebook, download) => {
    return getProtectedEbook(idusuario, idebook, download);
};

const fetchProtectedEbookSuccess = (response, dispatch, download) => {
    console.log(response);
    if(download);
        downloadFile(response.data.message.downloadable_path, response.data.message.filename);
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

export{fetchEbooks, fetchEbooksError, fetchEbooksSuccess, fetchProtectedEbookError, fetchProtectedEbookSuccess, fetchProtectedEbook};