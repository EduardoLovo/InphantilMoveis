import React from "react";
import "./Home.css";
import "../../Style/style.css";
import { useNavigate } from "react-router-dom";
import { JwtHandler } from "../../jwt_handler/jwt_handler";
import { BsCalculatorFill } from "react-icons/bs";
import { GiRolledCloth } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { BiTask } from "react-icons/bi";

export const Home = () => {
  const navigate = useNavigate();

  const logout = () => {
    JwtHandler.clearJwt();
    navigate("/");
  };

  return (
    <div class="container px-4 text-center">
      <div class="row gx-3">
        <div class="col homeCards">
          <div class="p-3 glass" onClick={() =>{navigate("/calculadora")}}>
            <BsCalculatorFill className="iconHome"/>
            <span>Calculadora</span>
          </div>
        </div>
        <div class="col homeCards">
          <div class="p-3 glass" onClick={() =>{navigate("/apliques")}}>
            <GiRolledCloth className="iconHome"/>
            <span>Apliques</span>
          </div>
        </div>
        <div class="col homeCards">
          <div class="p-3 glass" onClick={() =>{navigate("/infoProdutos")}}>
            <FaInfoCircle className="iconHome"/>
            <span>Informações dos prdutos (clientes)</span>
          </div>
        </div>
        <div class="col homeCards">
          <div class="p-3 glass" onClick={() =>{navigate("/apliqueslist")}} >
            <GiWhiteBook className="iconHome"/>
            <span>Catalogo (clientes)</span>
          </div>
        </div>
        <div class="col homeCards">
          <div class="p-3 glass" onClick={() =>{navigate("/tarefas")}} >
            <BiTask className="iconHome"/>
            <span>Tarefas</span>
          </div>
        </div>
        
      </div>
      <div className="divBtnLogout">
        <button onClick={logout} className="btnBack">
          Logout
        </button>
      </div>

    </div>
  );
};
