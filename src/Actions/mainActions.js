import {
    FETCH_EBOOKS_ERROR,
    FETCH_EBOOKS_SUCCESS,
    FETCH_PROTECTED_EBOOK_ERROR,
    FETCH_PROTECTED_EBOOK_SUCCESS,
    REFRESH_EBOOKS
} from "./actionsTypes";
import {download as downloadFile} from "../auxilliaryFunctions";

import getEbooks from '../APIs/getEbooks'
import getProtectedEbook from '../APIs/getProtectedEbook';



const refreshEbooks = () => {
    return{
        type: REFRESH_EBOOKS
    };
};

const fetchEbooks = (idusuario) => {
    return getEbooks(idusuario);
};

const fetchProtectedEbook = (idusuario, idebook, download) => {
    return getProtectedEbook(idusuario, idebook, download);
};

const fetchProtectedEbookSuccess = (response, dispatch, download) => {
    console.log(response);
    if (download) ;
    downloadFile(response.data.message.downloadable_path, response.data.message.filename);
    dispatch({type: FETCH_PROTECTED_EBOOK_SUCCESS, payload: {response}});
};

const fetchProtectedEbookError = (response, dispatch) => {
    if (!response.response)
        alert('Erro de conexão');
    dispatch({type: FETCH_PROTECTED_EBOOK_ERROR, payload: {response}});
};

const fetchEbooksSuccess = (response, dispatch) => {
    dispatch({type: FETCH_EBOOKS_SUCCESS, payload: {response}});
};

const fetchEbooksError = (error, dispatch) => {
    if (!error.response)
        alert('Erro de conexão');

    dispatch({type: FETCH_EBOOKS_ERROR, payload: {error}});
};

export {
    fetchEbooks,
    fetchEbooksError,
    fetchEbooksSuccess,
    fetchProtectedEbookError,
    fetchProtectedEbookSuccess,
    fetchProtectedEbook,
    refreshEbooks
};