//INTERFACE
export interface IAction {
    type: string,
    payload?: any
}

//CATEGORY
export const GET_CATEGORY_REQUEST = 'GET_CATEGORY_REQUEST'
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS'
export const GET_CATEGORY_ERROR = 'GET_CATEGORY_ERROR'