import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Philosophy, Menu, Franchise, ContactUs } from "./pages/pages";

import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="philosophy" element={<Philosophy />} />
        <Route path="menu" element={<Menu />} />
        <Route path="franchise" element={<Franchise />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
