import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("register submit");
  };
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>{" "}
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email"> Email</label>
          <input type="text" email="email" value={email} onChange={onChange} />
        </div>{" "}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            password="password"
            value={password}
            onChange={onChange}
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
