import React from "react";
import "./Home.css";
import "../../Style/style.css";
import { useNavigate } from "react-router-dom";
import { BsCalculatorFill } from "react-icons/bs";
import { GiRolledCloth } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container px-4 text-center">
      <h2>Vendedoras:</h2>
      <div className="row gx-3">
        <div className="col homeCards">
          <div className="p-3 glass" onClick={() =>{navigate("/calculadora")}}>
            <BsCalculatorFill className="iconHome"/>
            <span>Calculadora</span>
          </div>
        </div>
        <div className="col homeCards">
          <div className="p-3 glass" onClick={() =>{navigate("/apliques")}}>
            <GiRolledCloth className="iconHome"/>
            <span>Apliques</span>
          </div>
        </div>        
        <div className="col homeCards">
          <div className="p-3 glass" onClick={() =>{navigate("/junior")}} >
            <GiRolledCloth className="iconHome"/>
            <span>Lençois pronta entrega</span>
          </div>
        </div>   
        <div className="col homeCards">
          <div className="p-3 glass" onClick={() =>{navigate("/calcmedidas")}}>
            <BsCalculatorFill className="iconHome"/>
            <span>Calculadora Medidas</span>
          </div>
        </div>    
        <div className="col homeCards">
          <div className="p-3 glass" onClick={() =>{navigate("/tecidos")}}>
            <GiRolledCloth className="iconHome"/>
            <span>Tecidos</span>
          </div>
        </div>    
      </div>
      <h2 className="textbranco">Clientes:</h2>
      <div className="row gx-3">
      <div className="col homeCards">
          <div className="p-3 glass" onClick={() =>{navigate("/infoProdutos")}}>
            <FaInfoCircle className="iconHome"/>
            <span>Informações dos prdutos (clientes)</span>
          </div>
        </div>
       <div className="col homeCards">
          <div className="p-3 glass" onClick={() =>{navigate("/apliqueslist")}} >
            <GiWhiteBook className="iconHome"/>
            <span>Catalogo (clientes)</span>
          </div>
        </div>
        <div className="col homeCards">
          <div className="p-3 glass" onClick={() =>{navigate("/apliques-cabana")}} >
            <GiWhiteBook className="iconHome"/>
            <span>Catalogo Cabana (clientes)</span>
          </div>
        </div>
        <div className="col homeCards">
          <div className="p-3 glass" onClick={() =>{navigate("/catalogoTecidos")}} >
            <GiWhiteBook className="iconHome"/>
            <span>Catalogo - Lençol / Aplique - (clientes)</span>
          </div>
        </div>
        <div className="col homeCards">
          <div className="p-3 glass" onClick={() =>{navigate("/teste2")}} >
            <GiWhiteBook className="iconHome"/>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
