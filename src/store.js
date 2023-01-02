import {configureStore} from '@reduxjs/toolkit'
import ticketReducer from './components/ticket-listining/ticketSlice'


const store = configureStore({
    reducer:{
        ticket: ticketReducer
    }
})

export default store