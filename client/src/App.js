import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactState from "./context/contact/ContactState";
import { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <ContactState>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Fragment>
      </BrowserRouter>
    </ContactState>
  );
};

export default App;
