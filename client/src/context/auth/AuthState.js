import React, { useEffect, useReducer } from "react";
import authContext from "./AuthContext";
import * as axios from "axios";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../types";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };
  console.log(initialState.token, "token");
  const [state, dispatch] = useReducer(authReducer, initialState);
  setAuthToken(initialState.token);
  // load user
  const loadUser = async () => {
    try {
      const res = await axios.get("/api/auth");
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register User

  const register = async (formData) => {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/users", formData, config);

      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    }
  };
  // Login user

  const login = async (formData) => {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/auth", formData, config);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
    }
  };
  // Logout

  const logout = () => console.log("logout");

  //Clear errors

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  // 'watch' state.token and set headers and local storage on any change
  useEffect(() => {
    setAuthToken(initialState.token);
  }, [initialState.token]);
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
