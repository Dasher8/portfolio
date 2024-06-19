import React from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "../../../src/index.css";

export default function LayoutDefault({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
