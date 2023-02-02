import {configureStore} from '@reduxjs/toolkit'
import ticketReducer from './components/ticket-listining/ticketSlice'
import loginReducer from './components/login/loginSlice'
import userReducer from './pages/dashboard/userSlice'


const store = configureStore({
    reducer:{
        ticket: ticketReducer,
        login: loginReducer,
        user: userReducer,
    }
})

export default store