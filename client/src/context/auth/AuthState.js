import React, { useReducer } from "react";
import authContext from "./AuthContext";
import * as axios from "axios";

import { REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_ERRORS } from "../types";
import authReducer from "./authReducer";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // load user
  const loadUser = () => console.log("LoadUser");

  // Register User

  const register = async (formData) => {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/users", formData, config);
      console.log(res);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
      console.log(err);

      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    }
  };
  // Login user

  const login = () => console.log("login");

  // Logout

  const logout = () => console.log("logout");

  //Clear errors

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <authContext.Provider
      value={{
        token: state.token,

        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
