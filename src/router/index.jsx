import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Header from "../components/header";
import Footer from "../components/footer";
import Error from "../pages/error";
import Project from "../pages/project";

import "../index.css";


export default function Router() {
  return (
  <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  </React.StrictMode>
  );
}
