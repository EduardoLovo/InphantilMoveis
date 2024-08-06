import React from 'react';
import { Link } from 'react-router-dom';
import './SinteticoEstoque.css';
import { SinteticoLista } from '../../../components/SinteticoLista/SinteticoLista';

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
