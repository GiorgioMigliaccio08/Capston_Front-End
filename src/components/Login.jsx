import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { getUserLoggedAction } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [action, setAction] = useState("Sign Up");
  const [login, setLogin] = useState({ username: "", password: "" });
  const [register, setRegister] = useState({
    username: "",
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (showLoginForm) {
      setAction("Login");
      setRegister({
        username: "",
        nome: "",
        cognome: "",
        email: "",
        password: "",
      });
    }
  }, [showLoginForm]);

  const sendRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/auth/register`, {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setShowLoginForm(true);
      }
    } catch (error) {
      alert(error);
    }
  };

  const sendLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/auth/login`, {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("token", data.accessToken);
        console.log(data);
        setLogin({
          username: "",
          password: "",
        });
        dispatch(getUserLoggedAction());
        navigate("/homepage");
      }
    } catch (error) {
      setError(error);
      setErrorMessage("Credenziali errate!");
    }
  };

  return (
    <div className="background">
      <div className="logincontainer">
        <div className="login_signUp">
          <div className="text">{action}</div>
          <div className="line"></div>
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

        <div className="inputs">
          {action === "Login" ? (
            <>
              <form onSubmit={sendLogin}>
                <div className="input">
                  <FaCircleUser className="icon" />
                  <input
                    type="text"
                    placeholder="Username"
                    value={login.username}
                    onChange={(e) =>
                      setLogin({ ...login, username: e.target.value })
                    }
                  />
                </div>
                <div className="input">
                  <RiLockPasswordFill className="icon" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={login.password}
                    onChange={(e) =>
                      setLogin({ ...login, password: e.target.value })
                    }
                  />
                </div>
                <button className="login-button" type="submit">
                  Accedi
                </button>
              </form>
            </>
          ) : (
            <form onSubmit={sendRegister}>
              <div className="input">
                <FaCircleUser className="icon" />
                <input
                  type="text"
                  placeholder="Username"
                  value={register.username}
                  onChange={(e) =>
                    setRegister({ ...register, username: e.target.value })
                  }
                />
              </div>
              <div className="input">
                <FaUser className="icon" />
                <input
                  type="text"
                  placeholder="Nome"
                  value={register.nome}
                  onChange={(e) =>
                    setRegister({ ...register, nome: e.target.value })
                  }
                />
              </div>
              <div className="input">
                <FaUser className="icon" />
                <input
                  type="text"
                  placeholder="Cognome"
                  value={register.cognome}
                  onChange={(e) =>
                    setRegister({ ...register, cognome: e.target.value })
                  }
                />
              </div>
              <div className="input">
                <MdEmail className="icon" />
                <input
                  type="email"
                  placeholder="Email"
                  value={register.email}
                  onChange={(e) =>
                    setRegister({ ...register, email: e.target.value })
                  }
                />
              </div>
              <div className="input">
                <RiLockPasswordFill className="icon" />
                <input
                  type="password"
                  placeholder="Password"
                  value={register.password}
                  onChange={(e) =>
                    setRegister({ ...register, password: e.target.value })
                  }
                />
              </div>
              <button className="register-button" type="submit">
                Registrati
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
