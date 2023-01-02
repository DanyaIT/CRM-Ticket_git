import{
    fetchTicketIsLoading,
    fetchTicketAccess,
    fetchTicketError,
    searchTickets
} from '../ticket-listining/ticketSlice'
import {getAllTicket} from '../../api/ticketApi'

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