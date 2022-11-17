import React, { useState } from "react";
import "./entry.style.css";
import { Jumbotron } from "react-bootstrap";
import Login from "../../components/login/Login";
import ResetPassword from "../../components/resetPassword/ResetPassword";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Заполните форму!");
    }
  };

  const formSwitcher = (typeForm) => {
    setFormLoad(typeForm);
  };

  return (
    <div className="entry__page bg-info">
      <div className="entry___page-form">
        {formLoad == "login" && (
          <Login
            formSwitcher={formSwitcher}
            handleSubmit={handleSubmit}
            handleOnchange={handleOnchange}
            email={email}
            password={password}
          />
        )}

        {formLoad == "reset" && (
          <ResetPassword
            formSwitcher={formSwitcher}
            handleSubmit={handleSubmit}
            handleOnchange={handleOnchange}
            email={email}
            password={password}
          />
        )}
      </div>
    </div>
  );
};

export default Entry;
