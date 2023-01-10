import{
    fetchTicketIsLoading,
    fetchTicketAccess,
    fetchTicketError,
    searchTickets,
    fetchSingleTicketIsLoading,
    fetchSingleTicketAccess,
    fetchSingleTicketError,
    replyTicketIsLoading,
    replyTicketAccess,
    replyTicketError,
    closeTicketIsLoading,
    closeTicketError,
    closeTicketAccess
} from '../ticket-listining/ticketSlice'
import {getAllTicket, getSingleTicket, updateReplyTicket, updateTicketStatusClosed} from '../../api/ticketApi'


export const fetchAllticket = () => async (dispatch) => {
    dispatch(fetchTicketIsLoading())
    try {
        const result = await getAllTicket()
        dispatch(fetchTicketAccess(result.data.result))
    } catch (error) {
        dispatch(fetchTicketError(error.message))
    }
}

export const filterTickets = (str) => (dispatch) => {
    dispatch(searchTickets(str))
}

export const fetchSingleTicket = (_id) => async(dispatch) => {
    dispatch(fetchSingleTicketIsLoading())
    try {
        const result = await getSingleTicket(_id)
        if(result){
            dispatch(fetchSingleTicketAccess(result.data.result.length && result.data.result[0]))
        }
    } catch (error) {
        dispatch(fetchSingleTicketError('Не удалось получить данные от сервера ('))
    }
}

export const replyOnTicket = (_id, messageObj) => async (dispatch) => {
    dispatch(replyTicketIsLoading())
    try {
        const result = await updateReplyTicket(_id, messageObj)
        if(result.status === 'error'){
            dispatch(replyTicketError(result.message)) 
        }
        dispatch(fetchSingleTicket(_id))
        dispatch(replyTicketAccess(result.data.message))
    } catch (error) {
        dispatch(replyTicketError(error))
    }
}

export const closeTicket = (_id) => async(dispatch) => {
    dispatch(closeTicketIsLoading())
    try {
        const result = await updateTicketStatusClosed(_id)
        if(result.status === 'error'){
            dispatch(closeTicketError(result.message))
        }
        dispatch(fetchSingleTicket(_id))

        dispatch(closeTicketAccess(result.data.message))
    } catch (error) {
        dispatch(closeTicketError(error))
    }
}