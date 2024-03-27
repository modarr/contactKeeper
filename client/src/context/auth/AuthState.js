import React, { useReducer } from "react";
import authContext from "./AuthContext";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer("authReducer", initialState);

  // load user

  // Register User

  // Login user

  // Logout
  //Clea errors
  return (
    <authContext.Provider
      value={{
        token: state.token,

        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
