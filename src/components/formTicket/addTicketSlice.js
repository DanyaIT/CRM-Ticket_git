import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    isLoading: false,
    error: '',
    successMessage: '',
}

const newTicketSlice = createSlice({
    name: 'newTicket',
    initialState,
    reducers:{
        createTicketIsLoading: (state) => {
            state.isLoading = true
        },
        createTicketSuccess: (state, {payload}) => {
            state.isLoading = false
            state.error = ''
            state.successMessage = payload
        },
        createTicketError: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },
        restTicketSuccessMessageOrError: (state) => {
            state.isLoading = false
            state.successMessage = ''
            state.error = ''
        }

    }
})

const {reducer, actions} = newTicketSlice
export const {
    createTicketIsLoading,
    createTicketSuccess,
    createTicketError,
    restTicketSuccessMessageOrError
} = actions

export default reducer