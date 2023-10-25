import React from "react";
import "./Loading.css";

export const Loading = () => {
  return (
    <div className="loading-page">
      <p>Carregando...</p>
      <div className="loader"></div>
    </div>
  );
};
