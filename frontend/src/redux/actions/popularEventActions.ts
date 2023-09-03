import { Dispatch } from 'react'
import { PopularEventAPIService } from '../../services/apiServices'
import * as actionTypes from './actionTypes'

const getPopularEventRequest = (): actionTypes.IAction => ({
    type: actionTypes.GET_POPULAR_EVENT_REQUEST
})

const getPopularEventSuccess = (data?: any): actionTypes.IAction => ({
    type: actionTypes.GET_POPULAR_EVENT_SUCCESS,
    payload: data
})

const getPopularEventError = (error: unknown): actionTypes.IAction => ({
    type: actionTypes.GET_POPULAR_EVENT_ERROR,
    payload: typeof error === "string" ? error : null
})

export const getPopularEvent = () => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(getPopularEventRequest())
        try {
            const data = await PopularEventAPIService()
            dispatch(getPopularEventSuccess(data))

        } catch (error) {
            dispatch(getPopularEventError(error))
        }
    }

}