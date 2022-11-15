import React, { useState } from "react";
import main from "../images/main.svg";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="flex-row justify-space-around align-center mb-0">
      <div className="col-12 col-md-6 login">
        <div className="card welcome">
          <h1 className="card-header welcome">
            Welcome to <span className="appName"> Deepen</span>
          </h1>
          <p id="description">
            A place where developers can connect, share and collab.
          </p>
          <div className="card-body">
            <img
              src={main}
              className="mainImg"
              style={{ width: "60%" }}
              alt="mainImg"
              sizes="55%"
            />
            <h3 className="sign-up">
              Don't have an account yet?
              <Link to="/register">
                <span>
                  Join Community
                </span>
              </Link>
            </h3>
            <form onSubmit={handleFormSubmit} className="log-input ">
              <input
                className="form-input px-3"
                placeholder="Email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input px-3"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button id="register" className="btn d-block" type="submit">
                Login
              </button>
              <p className="sloganBtn"> Create, Share and Inspire</p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
