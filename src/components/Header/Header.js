import React from "react";
import "./Header.css";

export const Header = () => {
  const type = localStorage.getItem("user");

  return (
    <div className="contentHeader">
      <div className="cartUser">
        <h1>{type === "adm" ? "Adm" : "Vendas"}</h1>
      </div>
      Inphantil
    </div>
  );
};
