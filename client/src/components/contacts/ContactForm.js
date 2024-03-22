import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };
  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {" "}
        {current ? "Update Contact " : "Add Contact"}{" "}
      </h2>
      <input
        type="'text"
        placeholder="name"
        name="name"
        value={name}
        onChange={onChange}
      ></input>{" "}
      <input
        type="'text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      ></input>{" "}
      <input
        type="'text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      ></input>{" "}
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value={type}
        checked={type === "personal"}
        onChange={onChange}
      />
      Personal {"  "}
      <input
        type="radio"
        name="type"
        value={type}
        checked={type === "professional"}
        onChange={onChange}
      />
      professional
      <div>
        <input
          type="submit"
          value={current ? "Update Contact " : "Add Contact"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
