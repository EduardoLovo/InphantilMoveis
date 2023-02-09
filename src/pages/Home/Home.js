import React from "react";
import { useNavigate } from "react-router-dom";

import Modal from "react-modal";
import { JwtHandler } from "../../jwt_handler/jwt_handler";
import "./Home.css";
Modal.setAppElement("#root");

export const Home = () => {
  const navigate = useNavigate();

  const logout = () => {
    JwtHandler.clearJwt();
    navigate("/");
  };

  return (
    <div>
      <div className="contentHome">
        <div className="butons">
          <button onClick={() =>{navigate("/calculadora")}}>Calculadora</button>
          <button onClick={() =>{navigate("/apliques")}}>Aplique</button>
          <button
            onClick={() => {
              navigate("/infoProdutos");
            }}
          >
            Informações 
          </button>
          <button
            onClick={() => {
              navigate("/apliqueslist");
            }}
          >
            Clientes 
          </button>
        </div>

        <div className="divBtnLogout">
        <button onClick={logout} className="btnBack">
          sair
        </button>

        </div>

      </div>
    </div>
  );
};
