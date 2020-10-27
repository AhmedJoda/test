import React from "react";
import "./homePage.css";
import Navbar from "../navbar/navbar";
import Body from "../body/body";
import Footer from "../footer/footer";

export default function homePage() {
  return (
    <div>
      <Navbar bg="dark" sticky="sticky" />
      <Body />
      <Footer />
    </div>
  );
}
