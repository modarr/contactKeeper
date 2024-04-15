import React, { useReducer } from "react";
import alertContext from "./alerContext";
import { v4 as uuidv4 } from "uuid";

import { REMOVE_ALERT, SET_ALERT } from "../types";
import alertReducer from "./alertReducer";

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //set alert

  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });
    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id,
        }),
      timeout
    );
  };

  return (
    <alertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
