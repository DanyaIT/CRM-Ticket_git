import {configureStore} from '@reduxjs/toolkit'
import ticketReducer from './components/ticket-listining/ticketSlice'
import loginReducer from './components/login/loginSlice'


const store = configureStore({
    reducer:{
        ticket: ticketReducer,
        login: loginReducer
    }
})

export default store