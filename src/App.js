import React, {useState} from "react";
import "./App.css";
import Entry from "./pages/entry/Entry.page";
import DefaultLayout from './layout/DefaultLayout'
import DashBoard from "./pages/dashboard/DashBoard";
import AddTicket from "./pages/new-ticket/AddTicket";
import TicketLists from "./components/ticket-listining/TicketLists";
import Ticket from "./pages/tickets/Ticket";


function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        <Ticket/>
        {/* <TicketLists/> */}
        {/* <DashBoard/> */}
        {/* <AddTicket/> */}
      </DefaultLayout>
    </div>
  );
}

export default App;
