import{FETCH_EBOOKS, FETCH_EBOOKS_ERROR, FETCH_EBOOKS_SUCCESS} from "./actionsTypes";

import getEbooks from '../APIs/getEbooks'

const fetchEbooks = () => {
    return getEbooks();
};

const fetchEbooksSucess = (response, dispatch) => {
    dispatch({type: FETCH_EBOOKS_SUCCESS, payload:{response}});
};

const fetchEbooksError = (error, dispatch) => {
    dispatch({type: FETCH_EBOOKS_ERROR, payload:{error}});
};

export{fetchEbooks, fetchEbooksError, fetchEbooksSucess};