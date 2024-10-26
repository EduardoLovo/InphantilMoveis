import React from "react";
import { Link } from "react-router-dom";

export const MenuAdm = () => {
  return (
    <div>
      <div className="sidebar-items">
        <h3>Adm</h3>
        <p className="mt-4">Adm:</p>
        <Link to="/novo-sintetico">Adicionar Sintetico</Link>
        <Link to="/apliques-create">Adicionar Aplique</Link>
        <Link to="/apliques-para-comprar">Apliques para Comprar</Link>
        <Link to="/apliques-para-cortar">Apliques para Cortar</Link>
        <Link to="/montagem-tapetes">Composições de tapetes</Link>

        <p className="mt-4">Estoque:</p>
        <Link to="/apliques-estoque">Apliques</Link>
        <Link to="/tecidos">Tecidos</Link>
        <Link to="/sintetico-estoque">Cores para Cama</Link>

        <p className="mt-4">catalogos:</p>
        <Link to="/catalogo-lençol-aplique">Apliques % Lençois</Link>
        <Link to="/catalogo-apliques-para-cabana">Apliques Para Cabana</Link>
        <Link to="/sintetico-catalogo">Cores para Cama</Link>
        <Link to="/catalogo-lencol-pronta-entrega">Lencois Pronta-Entrega</Link>

        <p className="mt-4">Calculadoras:</p>
        <Link to="/calculadora-nova">Calculadora NOVA</Link>
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
    </div>
  );
};
