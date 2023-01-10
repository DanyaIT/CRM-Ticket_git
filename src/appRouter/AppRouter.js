import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publickRoutes } from "../roustes";
import { useSelector } from "react-redux";
import {loginAccess} from '../components/login/loginSlice'
import { useDispatch } from "react-redux";
import {fetchNewTokenAccess} from '../api/userApi'
import { getUserProfile } from "../pages/dashboard/userAction";

const AppRouter = () => {
  const dispatch = useDispatch()
  const {isAuth} = useSelector(state => state.login)
  const {user} = useSelector(state => state.user)
   useEffect(()=>{
  const updateAccessToken = async() => {
    const result = await fetchNewTokenAccess()
    result && dispatch(loginAccess())
  }
  !user._id && dispatch(getUserProfile())
  !sessionStorage.getItem('createJWT') && localStorage.getItem('crmSite') && updateAccessToken()
  !isAuth && sessionStorage.getItem('createJWT') && dispatch(loginAccess()) 
  },[dispatch, isAuth])

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
