import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tickets: [],
    isLoading: false,
    error: '',
    replyTicketFail: '',
    searchTicketsList: [],
    selectedTicket: {},
    replyMessage: ''
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
        },

        fetchSingleTicketIsLoading:(state) => {
            state.isLoading = true
        },
        fetchSingleTicketAccess:(state, {payload}) => {
            state.isLoading = false
            state.selectedTicket = payload
            state.error = ''
        },
        fetchSingleTicketError: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },

        replyTicketIsLoading:(state) => {
            state.isLoading = true
        },
        replyTicketAccess: (state, {payload}) => {
            state.isLoading = false
            state.error = ''
            state.replyMessage = payload
        },
        replyTicketError: (state, {payload}) => {
            state.isLoading = false
            state.replyTicketFail = payload
        },

        closeTicketIsLoading: (state) => {
            state.isLoading = true
        },
        closeTicketAccess: (state, {payload}) => {
            state.isLoading = false
            state.error = ''
            state.replyMessage = payload
        },
        closeTicketError: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },
    }
})

const {reducer, actions} = ticketListSlice
export const {
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
    closeTicketAccess,
    closeTicketError
} = actions

export default reducer