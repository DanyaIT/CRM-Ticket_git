import React, { useState } from "react";
import "./entry.style.css";
import Login from "../../components/login/Login";
import ResetPassword from "../../components/resetPassword/ResetPassword";

const Entry = () => {
  const [formLoad, setFormLoad] = useState("login");

  const formSwitcher = (typeForm) => {
    setFormLoad(typeForm);
  };
  return (
    <div className="entry__page bg-info">
      <div className="entry___page-form">
        {formLoad === "login" && (
          <Login
            formSwitcher={formSwitcher}
          />
        )}

        {formLoad === "reset" && (
          <ResetPassword
            formSwitcher={formSwitcher}
          />
        )}
      </div>
    </div>
  );
};

export default Entry;
