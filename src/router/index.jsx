import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Error from "../pages/error";
import Argent from "../pages/argent";

import "../index.css";


export default function Router() {
  return (
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error/>}/>
          <Route path="/argent" element={<Argent />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
  );
}
