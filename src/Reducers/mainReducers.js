import {
    ACTIVITY_INDICATOR_ON, ASSIGN_SCROLLER, CHANGE_SCROLL_POSITION,
    FETCH_EBOOKS_ERROR,
    FETCH_EBOOKS_SUCCESS,
    FETCH_PROTECTED_EBOOK_ERROR,
    FETCH_PROTECTED_EBOOK_SUCCESS,
    SCROLL_TO
} from "../Actions/actionsTypes";

const INITIAL_STATE = {
    isActivityIndicatorOn: false,
    data: [],
    scrollViewPosition: 0,
    scroller: null
};

export default(state = INITIAL_STATE, action) => {
    switch(action.type){
        case ASSIGN_SCROLLER:{
            return {...state, scroller: action.payload.scroller};
        }
        case CHANGE_SCROLL_POSITION:{
            return {...state, scrollViewPosition: action.payload.position};
        }
        case SCROLL_TO: {
            return {...state, scrollViewPosition: action.payload.position}
        }
        case ACTIVITY_INDICATOR_ON:{
            return {...state, isActivityIndicatorOn: true}
        }
        case FETCH_EBOOKS_SUCCESS:{
            return {...state, data: action.payload.response.data, isActivityIndicatorOn: false};
        }
        case FETCH_EBOOKS_ERROR:{
            return {...state, isActivityIndicatorOn: false};
        }
        case FETCH_PROTECTED_EBOOK_SUCCESS:{
            return {...state, isActivityIndicatorOn: false};
        }
        case FETCH_PROTECTED_EBOOK_ERROR:{
            return {...state, isActivityIndicatorOn: false};
        }
        default:{
            return state;
        }
    }
}