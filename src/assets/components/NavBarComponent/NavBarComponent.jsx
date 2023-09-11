import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import HomeComponent from "../HomeComponet/HomeComponent";
import AboutUsComponent from "../AboutUsComponent/AboutUsComponent";
import ContactComponet from "../ContactComponent/ContactComponet";

const NavBarComponent = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route exact path="/home" element={<HomeComponent />}></Route>
        <Route exact path="/aboutus" element={<AboutUsComponent />}></Route>
        <Route exact path="/contact" element={<ContactComponet />}></Route>
      </Routes>
    </Router>
  );
};

export default NavBarComponent;
