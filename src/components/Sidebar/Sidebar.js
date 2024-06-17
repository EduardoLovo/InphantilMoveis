import React, { useState } from "react";
import Logo from "../../img/LogoCir.png";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import "../../Style/style.css";
import { JwtHandler } from "../../jwt_handler/jwt_handler";

const Sidebar = () => {
  const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

  const navigate = useNavigate();

  const type = localStorage.getItem("user");

  const logout = () => {
    setIsLogged(JwtHandler.clearJwt());
    navigate("/");
    window.location.reload(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebars">
        <div className="sidebar-logo">
          {isLogged === true ? (
            <button onClick={logout} className="btnPadrao m-2">
              Logout
            </button>
          ) : (
            ""
          )}
        </div>
        {/* Menu login Adm */}
        {isLogged === true && type === "adm" && (
          <div className="sidebar-items">
            <h3>Adm</h3>
            <p className="mt-4">Adm:</p>
            <Link to="/apliques-create">Adicionar Aplique</Link>
            <Link to="/apliques-para-comprar">Apliques para Comprar</Link>
            <Link to="/apliques-para-cortar">Apliques para Cortar</Link>

            <p className="mt-4">Estoque:</p>
            <Link to="/apliques-estoque">Apliques</Link>
            <Link to="/tecidos">Tecidos</Link>
            <Link to="/material-estoque">Cores para Cama</Link>

            <p className="mt-4">catalogos:</p>
            <Link to="/catalogo-lençol-aplique">Apliques % Lençois</Link>
            <Link to="/catalogo-apliques-para-cabana">
              Apliques Para Cabana
            </Link>
            <Link to="/material-catalogo">Cores para Cama</Link>
            <Link to="/catalogo-lencol-pronta-entrega">
              Lencois Pronto Entrega
            </Link>

            <p className="mt-4">Calculadoras:</p>
            <Link to="/calculadora-para-lencois">Calculadora Sob Medida</Link>
            <Link to="/calculadora-60-40">Calculadora 60 / 40</Link>

            <p className="mt-4">Inphantil</p>
            <Link to="/info">Informações</Link>
            <a
              href="https://www.inphantil.com.br/"
              rel="noreferrer"
              target="_blank"
            >
              Inphantil Site
            </a>
            <a
              href="https://www.instagram.com/inphantil/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5561982388828"
              rel="noreferrer"
              target="_blank"
            >
              WhatsApp
            </a>
          </div>
        )}
        {/* Menu login vendedor */}
        {isLogged === true && type === "vendedor" && (
          <div className="sidebar-items">
            <h3>Vendas</h3>
            <p className="mt-4">Calculadoras:</p>
            <Link to="/calculadora-para-lencois">Calculadora Sob Medida</Link>
            <Link to="/calculadora-60-40">Calculadora 60 / 40</Link>

            <p className="mt-4">Catalogos:</p>
            <Link to="/catalogo-lençol-aplique">Apliques % Lençois</Link>
            <Link to="/catalogo-apliques-para-cabana">
              Apliques Para Cabana
            </Link>
            <Link to="/material-catalogo">Cores para Cama</Link>
            <Link to="/catalogo-lencol-pronta-entrega">
              Lencois Pronto Entrega
            </Link>

            <p className="mt-4">Estoque:</p>
            <Link to="/apliques-estoque">Apliques</Link>
            <Link to="/tecidos">Tecidos</Link>

            <p className="mt-4">Inphantil</p>
            <Link to="/info">Informações</Link>
            <a
              href="https://www.inphantil.com.br/"
              rel="noreferrer"
              target="_blank"
            >
              Inphantil Site
            </a>
            <a
              href="https://www.instagram.com/inphantil/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5561982388828"
              rel="noreferrer"
              target="_blank"
            >
              WhatsApp
            </a>
          </div>
        )}
        {/* Menu sem login; */}
        {isLogged === false && (
          <div className="sidebar-items">
            <p className="mt-4">Catalogos:</p>
            <Link to="/catalogo-lençol-aplique">Apliques & Lençois</Link>
            <Link to="/catalogo-apliques-para-cabana">
              Apliques Para Cabana
            </Link>
            <Link to="/material-catalogo">Cores para Cama</Link>
            <Link to="/catalogo-lencol-pronta-entrega">
              Lencois Pronto Entrega
            </Link>

            <p className="mt-4">Inphantil</p>
            <Link to="/info">Informações</Link>
            <a
              href="https://www.inphantil.com.br/"
              rel="noreferrer"
              target="_blank"
            >
              Inphantil Site
            </a>
            <a
              href="https://www.instagram.com/inphantil/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5561982388828"
              rel="noreferrer"
              target="_blank"
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
