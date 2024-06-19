import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Error from "../pages/error";
import Kasa from "../pages/kasa";

import "../index.css";


export default function Router() {
  return (
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error/>}/>
          <Route path="/kasa" element={<Kasa />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
  );
}
