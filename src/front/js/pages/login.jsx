import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import getState from "../store/flux";
import "./login.css";
import Swal from "sweetalert2";

export const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = () => {
    actions.getCrearUsuario(email, password);
  };

  const handleAlert = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Tu cuenta ha sido creada con éxito!",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const handleLogin = () => {
    actions.getLogin(loginEmail, loginPassword);
  };
  useEffect(() => {
    actions.getCrearUsuario();
  }, []);
  useEffect(() => {
    actions.getLogin();
  }, []);

  useEffect(() => {
    console.log(store.token, store.userId);
    if (store.token !== "" && store.token) {
      navigate(`/profile/${store.userId}`);
    }
  }, [store.token]);

  
  return (
    <div className="fondoLogin">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
          height: "100vh",
        }}
        className="container"
      >
        <div style={{ width: "50%" }} className="containerFormulario">
          <div
            style={{
              border: "1px solid white",
              padding: "2rem",
              borderRadius: "8px",
            }}
            className="container mt-5"
          >
            <ul
              style={{ display: "flex", justifyContent: "center" }}
              className="nav nav-tabs"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  style={{
                    backgroundColor: "transparent",
                    marginBottom: "10px",
                    marginRight: "10px",
                  }}
                  className="nav-link active"
                  id="login-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#login-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="login-tab-pane"
                  aria-selected="true"
                >
                  <span style={{ color: "white" }}>Iniciar Sesión</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  style={{ backgroundColor: "transparent" }}
                  className="nav-link"
                  id="signup-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#signup-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="signup-tab-pane"
                  aria-selected="false"
                >
                  <span style={{ color: "white" }}>Registrarse</span>
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="login-tab-pane"
                role="tabpanel"
                aria-labelledby="login-tab"
                tabIndex="0"
              >
                <div className="text-center mt-5">
                  <h1>Iniciar sesión</h1>
                  <p style={{ color: "white" }}>
                    Inicia sesión para acceder al contenido de nuestra web
                  </p>
                  <br />
                  <form>
                    <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <div className="user-icon">
                            <i
                              style={{
                                backgroundColor: "#1D5B79",
                                padding: "10px",
                                color: "white",
                                borderRadius: "8px",
                              }}
                              className="fas fa-user"
                            ></i>{" "}
                            {/* icono usuario */}
                          </div>
                        </div>
                        <div className="col">
                          <input
                            placeholder="Email"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            type="email"
                            className="form-control white-placeholder"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            style={{
                              marginBottom: "1rem",
                              width: "500px",
                              backgroundColor: "transparent",
                              color: "white",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <div className="password-icon">
                            <i
                              style={{
                                backgroundColor: "#1D5B79",
                                padding: "10px",
                                color: "white",
                                borderRadius: "8px",
                              }}
                              className="fas fa-lock"
                            ></i>{" "}
                            {/* icono candado */}
                          </div>
                        </div>
                        <div className="col">
                          <input
                            placeholder="Contraseña"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            type="password"
                            className="form-control white-placeholder"
                            id="exampleInputPassword1"
                            style={{
                              marginBottom: "1rem",
                              width: "500px",
                              backgroundColor: "transparent",
                              color: "white",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                  <button
                    style={{ backgroundColor: "#F3AA60", border: "none" }}
                    onClick={handleLogin}
                    className="btn btn-primary"
                  >
                    INICIAR SESIÓN
                  </button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="signup-tab-pane"
                role="tabpanel"
                aria-labelledby="signup-tab"
                tabIndex="0"
              >
                <div className="text-center mt-5">
                  <h1>Registro</h1>
                  <p style={{ color: "white" }}>
                    Registrate y descubre todo lo que tenemos para ti{" "}
                  </p>
                  <br />
                  <form>
                    <div className="form-group">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control white-placeholder"
                        id="exampleInputEmail2"
                        aria-describedby="emailHelp"
                        placeholder="Introduce tu email"
                        style={{
                          marginBottom: "1rem",
                          backgroundColor: "transparent",
                          color: "white",
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control white-placeholder"
                        id="exampleInputPassword2"
                        placeholder="Inserta tu contraseña"
                        style={{
                          marginBottom: "1rem",
                          backgroundColor: "transparent",
                          color: "white",
                        }}
                      />
                    </div>
                  </form>
                  <button
                    style={{ backgroundColor: "#F3AA60", border: "none" }}
                    onClick={() => {
                      if (
                        email === "" ||
                        password === "" ||
                        !email.includes("@")
                      ) {
                        Swal.fire({
                          icon: "error",
                          title: "Oops...",
                          text: "Tu mail debe contener un @",
                        });

                        if (
                          email.includes("@") ||
                          email === "" ||
                          password === ""
                        ) {
                          Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Tu contraseña no puede estar vacía!",
                          });
                        }

                        return;
                      }
                      handleSignup();
                      handleAlert();
                    }}
                    className="btn btn-primary"
                  >
                    REGISTARSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
