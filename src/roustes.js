import TicketLists from "./components/ticket-listining/TicketLists";
import DashBoard from "./pages/dashboard/DashBoard";
import Entry from "./pages/entry/Entry.page";
import AddTicket from "./pages/new-ticket/AddTicket";
import Ticket from "./pages/tickets/Ticket";


export const privateRoutes = [
    {
        path:'/dashboard',
        element:<DashBoard/>
    },
    {
        path:'/tickets',
        element:<TicketLists/>
    },
    {
        path:'/ticket/:tid',
        element:<Ticket/>
    },
    {
        path:'/add-ticket',
        element:<AddTicket/>
    }
]

export const publickRoutes = [
    {
        path:'/',
        element: <Entry/>
    },
]