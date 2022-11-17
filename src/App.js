import React, { useState } from "react";
import "./App.css";
import Entry from "./pages/entry/Entry.page";
import DefaultLayout from "./layout/DefaultLayout";
import DashBoard from "./pages/dashboard/DashBoard";
import AddTicket from "./pages/new-ticket/AddTicket";
import TicketLists from "./components/ticket-listining/TicketLists";
import Ticket from "./pages/tickets/Ticket";
import { Link, Routes, Route, Brow } from "react-router-dom";
import AppRouter from "./appRouter/AppRouter";

function App() {
  const isAuth = true
  return (
    <div className="App">
      {isAuth? <DefaultLayout>
        <AppRouter />
      </DefaultLayout>
      : <AppRouter />
      }
    
    </div>
  );
}

export default App;
