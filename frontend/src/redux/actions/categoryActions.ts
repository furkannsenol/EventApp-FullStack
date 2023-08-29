import { Dispatch } from 'react'
import { CategoryAPIService } from '../../services/apiServices'
import * as actionTypes from './actionTypes'

const getCategoryRequest = (): actionTypes.IAction => ({
    type: actionTypes.GET_CATEGORY_REQUEST
})

const getCategorySuccess = (data?: any): actionTypes.IAction => ({
    type: actionTypes.GET_CATEGORY_SUCCESS,
    payload: data
})

const getCategoryError = (error: unknown): actionTypes.IAction => ({
    type: actionTypes.GET_CATEGORY_ERROR,
    payload: typeof error === "string" ? error : null
})

export const getCategory = () => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(getCategoryRequest())
        try {
            const data = await CategoryAPIService()
            dispatch(getCategorySuccess(data))

        } catch (error) {
            dispatch(getCategoryError(error))
        }
    }

}