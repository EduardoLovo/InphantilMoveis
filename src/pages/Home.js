import React from "react";
import Logo from "../img/LogoCir.png";
import { useState } from "react";
import { useEffect } from "react";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="contentHome">
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <img src={Logo} alt="logo inphantil" />
      )}
    </div>
  );
};
