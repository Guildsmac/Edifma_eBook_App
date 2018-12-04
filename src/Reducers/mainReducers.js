import {
    ACTIVITY_INDICATOR_ON,
    FETCH_EBOOKS_ERROR,
    FETCH_EBOOKS_SUCCESS
} from "../Actions/actionsTypes";

const INITIAL_STATE = {
    isActivityIndicatorOn: false,
    data: []
};

export default(state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTIVITY_INDICATOR_ON:{
            return {...state, isActivityIndicatorOn: true}
        }
        case FETCH_EBOOKS_SUCCESS:{
            return {...state, data: action.payload.response.data};
        }
        case FETCH_EBOOKS_ERROR:{
            return state;
        }
        default:{
            return state;
        }
    }
}