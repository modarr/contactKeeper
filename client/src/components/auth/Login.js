import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth/AuthContext";
import AlertContext from "../../context/alert/alerContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (error === "Invalid Credential") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-tine
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("please fill in all fields", "danger");
    } else {
      login({ email, password });
    }
  };
  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>{" "}
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email"> Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>{" "}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          value={"login"}
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Login;
