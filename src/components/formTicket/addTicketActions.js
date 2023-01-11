import { createNewTicketInBD } from '../../api/ticketApi'
import {
    createTicketIsLoading,
    createTicketSuccess,
    createTicketError
} from './addTicketSlice'

export const addNewTicket = (formData) => async(dispatch) => {
    dispatch(createTicketIsLoading())
    try {
        const result = await createNewTicketInBD(formData)
        console.log(result.status)
        if(result.status === 'error'){
            return dispatch(createTicketError(result.message))
        }
        dispatch(createTicketSuccess(result.message))
    } catch (error) {
        dispatch(createTicketError(error))
    }
}