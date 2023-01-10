import {configureStore} from '@reduxjs/toolkit'
import ticketReducer from './components/ticket-listining/ticketSlice'
import loginReducer from './components/login/loginSlice'
import userReducer from './pages/dashboard/userSlice'
import createNewTicketReducer from './components/formTicket/addTicketSlice'


const store = configureStore({
    reducer:{
        ticket: ticketReducer,
        login: loginReducer,
        user: userReducer,
        newTicket: createNewTicketReducer
    }
})

export default store