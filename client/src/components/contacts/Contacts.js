import React, { useContext, Fragment, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../layout/spinner";

export const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    //eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      {contacts !== null && contacts.length === 0 && !loading ? (
        <h4>Please add a contact</h4>
      ) : (
        ""
      )}
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact.id}
                  timeout={500}
                  classNames={"item"}
                >
                  <ContactItem key={contact.id} contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact.id}
                  timeout={500}
                  classNames={"item"}
                >
                  <ContactItem key={contact.id} contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
