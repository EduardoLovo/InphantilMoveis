import React from "react";
import "./Header.css";
import logo from '../../images/logo.jfif'
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiRolledCloth } from "react-icons/gi";
import { BsCalculatorFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";

export const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="contentHeader">

      <img className="logoHeader" src={logo} alt='logo' />
      
      <div className="cartUser">
        <h1>Inphantil</h1>
      </div>

      <p onClick={() => navigate('./home')} className="homeIcon"><FaHome /></p>
      <p onClick={() => navigate('./calculadora')} className="homeIcon"><BsCalculatorFill /></p>
      <p onClick={() => navigate('./apliques')} className="homeIcon"> <GiRolledCloth/> </p>
      <p onClick={() => navigate('./infoProdutos')} className="homeIcon"> <FaInfoCircle/> </p>
    </div>
  );
};
