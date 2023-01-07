import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isLoading: false,
    error: ''
}

const userSlice = createSlice({
    name:'User',
    initialState,
    reducers: {
        getLoadingUser: (state) => {
            state.isLoading = true
        },
        getAccessUser: (state, {payload}) => {
            state.isLoading = false,
            state.user = payload
            state.error = ''
        },
        getErrorUser: (state, {payload}) => {
            state.isLoading = false,
            state.error = payload
        }
    }
})

const {reducer, actions} = userSlice

export const {
    getLoadingUser,
    getAccessUser,
    getErrorUser
} = actions

export default reducer