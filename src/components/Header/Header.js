import React, { useState } from "react";
import "./Header.css";
import logo from '../../images/logo.jfif'
import { useNavigate } from "react-router-dom";
import { GiRolledCloth } from "react-icons/gi";
import { BsCalculatorFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { JwtHandler } from "../../jwt_handler/jwt_handler";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Header = () => {

  const navigate = useNavigate()

  const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

  const logout = () => {
    setIsLogged(JwtHandler.clearJwt());
    navigate("/");
    window.location.reload(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid ">

        <div className="d-flex align-items-center centralize">
          <img className="logoHeader" src={logo} alt='logo' />
          <p className="navbar-brand cursor" onClick={() => navigate('./home')}>INPHANTIL</p>
        </div>

       
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav centralize">
            <p className="nav-link cursor"  onClick={() => navigate('./calculadora')}><BsCalculatorFill /></p>
            <p className="nav-link cursor"  onClick={() => navigate('./apliques')}><GiRolledCloth/> </p>
            <p className="nav-link cursor"  onClick={() => navigate('./infoProdutos')}><FaInfoCircle/> </p>
            <p className="nav-link cursor"  onClick={() => navigate('./apliqueslist')}><GiWhiteBook/> </p>
          </div>
        </div>

        <div>
          {isLogged===true? 
          <button onClick={logout} className="btnBack">
          Logout
        </button>: ''}
        </div>

        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        

      </div>
    </nav>
  );
};
