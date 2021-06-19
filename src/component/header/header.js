
import React from "react";
import "./header.css";
import logoUrl from "./team47.jpg";

const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="Team 47" />
    <h1> IBM Accelerate </h1>
  </div>
);
export default Header;
