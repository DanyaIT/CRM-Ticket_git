import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    status: '',
    message: ''
}

const userRegistrationSlice = createSlice({
    name: 'userRegistration',
    initialState,
    reducers:{
        userRegistrationIsLoading: (state) => {
            state.isLoading = true
        },
        userRegistrationSuccess: (state, {payload}) => {
            state.isLoading = false
            state.status = 'success'
            state.message = payload
        },
        userRegistrationError: (state, {payload}) => {
            state.isLoading = false
            state.status = 'error'
            state.message = payload
        }
    }
})


const {reducer, actions} = userRegistrationSlice

export const {
    userRegistrationIsLoading,
    userRegistrationSuccess, 
    userRegistrationError
} = actions
 
export default reducer