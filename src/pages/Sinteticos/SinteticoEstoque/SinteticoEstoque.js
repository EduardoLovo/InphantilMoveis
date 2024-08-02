import React from 'react';
import { Link } from 'react-router-dom';
import { SinteticoLista } from '../SinteticoLista/SinteticoLista';
import './SinteticoEstoque.css';

export const SinteticoEstoque = () => {
  return (
    <div className="contentSinteticoEstoque">
      <h1>Estoque de Sinteticos</h1>
      <Link to="/novo-sintetico" className="botaoAdicionarNovoSintetico">
        <button>Adicionar novo sintetico</button>
      </Link>
      <SinteticoLista />
    </div>
  );
};
