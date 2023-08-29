import { ICategoryData } from '../../model/categoryData';
import * as actionTypes from '../actions/actionTypes';


interface IState {
    categories: ICategoryData[],
    loading: boolean,
    error: string | null
}

const initialState: IState = {
    categories: [],
    loading: false,
    error: null,
};

const categoryReducer = (state = initialState, action: actionTypes.IAction) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                loading: false,
                error: null,
            };
        case actionTypes.GET_CATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default categoryReducer;