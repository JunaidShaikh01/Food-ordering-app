import React from "react";
import logoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Error While Loading Image" />
        <h1>Food App</h1>
      </div>
      <nav>
        <button> Crat (0)</button>
      </nav>
    </header>
  );
}
