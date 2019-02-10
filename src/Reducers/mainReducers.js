import {
    ACTIVITY_INDICATOR_ON, ASSIGN_SCROLLER, CHANGE_SCROLL_POSITION,
    FETCH_EBOOKS_ERROR,
    FETCH_EBOOKS_SUCCESS,
    FETCH_PROTECTED_EBOOK_ERROR,
    FETCH_PROTECTED_EBOOK_SUCCESS,
    SCROLL_TO,
    REFRESH_EBOOKS, SWITCH_REFRESHING
} from "../Actions/actionsTypes";

const INITIAL_STATE = {
    isActivityIndicatorOn: false,
    data: [],
    isRefreshing:false,

};

export default(state = INITIAL_STATE, action) => {
    switch(action.type){
        case SWITCH_REFRESHING:{
            return {...state, isRefreshing: false}
        }
        case ACTIVITY_INDICATOR_ON:{
            return {...state, isActivityIndicatorOn: true}
        }
        case FETCH_EBOOKS_SUCCESS:{
            return {...state, data: action.payload.response.data, isActivityIndicatorOn: false, isRefreshing: false};
        }
        case FETCH_EBOOKS_ERROR:{
            return {...state, isActivityIndicatorOn: false, isRefreshing: false};
        }
        case FETCH_PROTECTED_EBOOK_SUCCESS:{
            return {...state, isActivityIndicatorOn: false};
        }
        case FETCH_PROTECTED_EBOOK_ERROR:{
            return {...state, isActivityIndicatorOn: false};
        }
        case REFRESH_EBOOKS:{
            return {...state, isRefreshing: true}
        }
        default:{
            return state;
        }
    }
}