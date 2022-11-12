import React, {useState} from "react";
import "./App.css";
import Entry from "./pages/entry/Entry.page";
import DefaultLayout from './layout/DefaultLayout'
import DashBoard from "./pages/dashboard/DashBoard";

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        <DashBoard/>
      </DefaultLayout>
    </div>
  );
}

export default App;
