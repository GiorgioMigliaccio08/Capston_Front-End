import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";

const Login = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="background">
      <div className="logincontainer">
        <div className="header">
          <div className="text">{action}</div>
          <div className="line"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <>
              <div className="input">
                <FaCircleUser className="icon" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input">
                <RiLockPasswordFill className="icon" />
                <input type="password" placeholder="Password" />
              </div>
            </>
          ) : (
            <>
              <div className="input">
                <FaCircleUser className="icon" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input">
                <FaUser className="icon" />
                <input type="text" placeholder="Nome" />
              </div>
              <div className="input">
                <FaUser className="icon" />
                <input type="text" placeholder="Cognome" />
              </div>
              <div className="input">
                <MdEmail className="icon" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input">
                <RiLockPasswordFill className="icon" />
                <input type="password" placeholder="Password" />
              </div>
            </>
          )}
        </div>

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
