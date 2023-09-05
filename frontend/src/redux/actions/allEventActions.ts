import { Dispatch } from 'react'
import { AllEventAPIService } from '../../services/apiServices'
import * as actionTypes from './actionTypes'

const getAllEventRequest = (): actionTypes.IAction => ({
    type: actionTypes.GET_ALL_EVENT_REQUEST
})

const getAllEventSuccess = (data?: any): actionTypes.IAction => ({
    type: actionTypes.GET_ALL_EVENT_SUCCESS,
    payload: data
})

const getAllEventError = (error: unknown): actionTypes.IAction => ({
    type: actionTypes.GET_ALL_EVENT_ERROR,
    payload: typeof error === "string" ? error : null
})

export const getAllEvent = () => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(getAllEventRequest())
        try {
            const data = await AllEventAPIService()
            dispatch(getAllEventSuccess(data))

        } catch (error) {
            dispatch(getAllEventError(error))
        }
    }

}