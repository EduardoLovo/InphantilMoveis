import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import "../../Style/style.css";
import { JwtHandler } from "../../jwt_handler/jwt_handler";
import { MenuAdm } from "./MenuAdm/MenuAdm";
import { MenuVendas } from "./MenuVendas/MenuVendas";
import { MenuCliente } from "./MenuCliente/MenuCliente";

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
        {/* Menu login Adm */}
        {isLogged === true && type === "adm" && <MenuAdm />}

        {/* Menu login vendedor */}
        {isLogged === true && type === "vendedor" && <MenuVendas />}
        {/* Menu sem login; */}
        {isLogged === false && <MenuCliente />}
      </div>
      <div className="sidebar-logo">
        {isLogged === true ? (
          <button onClick={logout} className="botao-primario">
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Sidebar;
