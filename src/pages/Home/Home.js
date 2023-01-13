import React from "react";
import { useNavigate } from "react-router-dom";

import Modal from "react-modal";
import { JwtHandler } from "../../jwt_handler/jwt_handler";
import "./Home.css";
Modal.setAppElement("#root");

export const Home = () => {
  const navigate = useNavigate();

  const Calculadora = () => {
    navigate("/calculadora");
  };
  const handleAplique = () => {
    navigate("/apliques");
  };

  const logout = () => {
    JwtHandler.clearJwt();

    navigate("/");
  };

  // const [modalIsOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  return (
    <div>
      <div className="contentHome">
        <div className="butons">
          <button onClick={Calculadora}>Calculadora</button>
          <button onClick={handleAplique}>Aplique</button>
          <button
            onClick={() => {
              navigate("/infoProdutos");
            }}
          >
            Informações do produto
          </button>
        </div>

        <button onClick={logout} className="btnBack">
          sair
        </button>
      </div>
    </div>
  );
};
