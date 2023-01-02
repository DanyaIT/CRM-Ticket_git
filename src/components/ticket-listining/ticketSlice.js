import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tickets: [],
    isLoading: false,
    error: '',
    searchTicketsList: [],
}

const ticketListSlice = createSlice({
    name: 'ticketList',
    initialState,
    reducers:{
        fetchTicketIsLoading:(state) => {
            state.isLoading = true
        },
        fetchTicketAccess:(state, {payload}) => {
            state.isLoading = false
            state.tickets = payload
            state.searchTicketsList = payload
        },
        fetchTicketError: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },
        searchTickets:(state, {payload}) => {
            state.searchTicketsList = state.tickets.filter(row => {
                if(!payload) return row
                return row.subject.toLowerCase().includes(payload.toLowerCase())
            })
        }
    }
})

const {reducer, actions} = ticketListSlice
export const {
    fetchTicketIsLoading,
    fetchTicketAccess,
    fetchTicketError,
    searchTickets
} = actions

export default reducer