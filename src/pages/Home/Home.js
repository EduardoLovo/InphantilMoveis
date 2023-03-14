import React from "react";
import { useNavigate } from "react-router-dom";

import Modal from "react-modal";
import { JwtHandler } from "../../jwt_handler/jwt_handler";
import "./Home.css";
import { BsCalculatorFill } from "react-icons/bs";
import { GiRolledCloth } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";
import { Loading } from "../../components/Loading/Loading";
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
          <div onClick={() =>{navigate("/calculadora")}} className="cardHome">
            <BsCalculatorFill className="iconHome"/>
            <span>Calculadora</span>
          </div>
          <div onClick={() =>{navigate("/apliques")}} className="cardHome">
            <GiRolledCloth className="iconHome"/>
            <span>Apliques</span>
          </div>
          <div onClick={() =>{navigate("/infoProdutos")}} className="cardHome">
            <FaInfoCircle className="iconHome"/>
            <span>Informações dos prdutos (clientes)</span>
          </div>
          <div onClick={() =>{navigate("/apliqueslist")}} className="cardHome">
            <GrCatalog className="iconHome"/>
            <span>Catalogo (clientes)</span>
          </div>
          <div onClick={() =>{navigate("/tarefas")}} className="cardHome">
            <GrCatalog className="iconHome"/>
            <span>Tarefas</span>
          </div>
        </div>

        <div className="divBtnLogout">
          <button onClick={logout} className="btnBack">
            sair
          </button>
        </div>
        <Loading/>
      </div>

      
    </div>
  );
};
