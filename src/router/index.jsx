import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Error from "../pages/error";
import Work from "../pages/work";

import "../index.css";


export default function Router() {
  return (
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error/>}/>
          <Route path="/project/:id" element={<Work />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
  );
}
