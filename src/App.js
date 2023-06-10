import "./App.scss";

import {
  ContactUs,
  Diet,
  Franchise,
  Home,
  Menu,
  Philosophy,
} from "./pages/pages";
import { Route, Routes } from "react-router-dom";

import HeaderIntersectionProvider from "./store/HeaderIntersectionProvider";
import Navbar from "./components/Layout/Navbar";
import React from "react";

function App() {
  return (
    <HeaderIntersectionProvider>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="philosophy" element={<Philosophy />} />
        <Route path="menu" element={<Menu />} />
        <Route path="diet" element={<Diet />} />
        <Route path="franchise" element={<Franchise />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>
    </HeaderIntersectionProvider>
  );
}

export default App;
