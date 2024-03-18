import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "john",
        email: "john@gmail.com",
        phone: "111-111-1111",
        type: "person",
      },
      {
        id: 2,
        name: "Mark",
        email: "xxx@gmail.com",
        phone: "222-999-9999",
        type: "person",
      },
      {
        id: 3,
        name: "Mary",
        email: "xxx@gmail.com",
        phone: "333-999-9999",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //add contact

  // delete contact

  //set current contact

  //clear current contact

  //update contact

  //filter contact

  // clear contact

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
