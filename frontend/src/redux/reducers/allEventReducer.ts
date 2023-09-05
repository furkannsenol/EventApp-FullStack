import { IEvent, IEventData } from '../../model/eventData';
import * as actionTypes from '../actions/actionTypes';


interface IState {
    allEvents: IEventData[],
    loading: boolean,
    error: string | null
}

const initialState: IState = {
    allEvents: [],
    loading: false,
    error: null,
};

const allEventReducer = (state = initialState, action: actionTypes.IAction) => {
    switch (action.type) {
        case actionTypes.GET_ALL_EVENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.GET_ALL_EVENT_SUCCESS:
            return {
                ...state,
                allEvents: action.payload,
                loading: false,
                error: null,
            };
        case actionTypes.GET_ALL_EVENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default allEventReducer;