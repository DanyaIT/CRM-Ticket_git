import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
    isLoading: false,
    error: ''
}

const loginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        loginLoading: (state) => {
            state.isLoading = true
        },

        loginAccess: (state) => {
            state.isLoading = false
            state.isAuth = true
            state.error = ''
        },
        loginError: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        }
    }
})

const {reducer, actions} = loginSlice
export const {
loginLoading, 
loginAccess,
loginError} = actions

export default reducer