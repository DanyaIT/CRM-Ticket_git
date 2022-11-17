import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/login/Login";
import DefaultLayout from "../layout/DefaultLayout";
import DashBoard from "../pages/dashboard/DashBoard";
import { privateRoutes, publickRoutes } from "../roustes";

const AppRouter = () => {
  const isAuth = true;
  return (
      <Routes>
        {isAuth &&
          privateRoutes.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))} 
        {publickRoutes.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
        <Route exact path="*" element = {<Navigate to = {'/'}/>} />
      </Routes>
  );
};

export default AppRouter;
