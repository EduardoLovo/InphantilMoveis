import React from "react";
import { Link } from "react-router-dom";
import "./SinteticoEstoque.css";
import { SinteticoLista } from "../../../components/SinteticoLista/SinteticoLista";

export const SinteticoEstoque = () => {
  return (
    <div className="">
      <div className="cabecalho">
        <h1>Estoque de Sinteticos</h1>
        <Link to="/novo-sintetico">
          <button className="botao-primario">Adicionar novo sintetico</button>
        </Link>
      </div>

      <SinteticoLista />
    </div>
  );
};
