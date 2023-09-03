import { IEvent, IEventData } from '../../model/eventData';
import * as actionTypes from '../actions/actionTypes';


interface IState {
    popularEvents: IEventData[],
    loading: boolean,
    error: string | null
}

const initialState: IState = {
    popularEvents: [],
    loading: false,
    error: null,
};

const popularEventReducer = (state = initialState, action: actionTypes.IAction) => {
    switch (action.type) {
        case actionTypes.GET_POPULAR_EVENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.GET_POPULAR_EVENT_SUCCESS:
            return {
                ...state,
                popularEvents: action.payload,
                loading: false,
                error: null,
            };
        case actionTypes.GET_POPULAR_EVENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default popularEventReducer;