import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactState from "./context/contact/ContactState";
import { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import AuthState from "./context/auth/AuthState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <BrowserRouter>
          <Fragment>
            <Navbar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </Fragment>
        </BrowserRouter>
      </ContactState>
    </AuthState>
  );
};

export default App;
