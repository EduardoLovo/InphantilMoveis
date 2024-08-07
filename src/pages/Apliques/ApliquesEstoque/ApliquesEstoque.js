import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../../../Api/Api';
import { Filtro } from '../../../components/Filtro';
import { Loading } from '../../../components/Loading/Loading';
import './ApliquesEstoque.css';
// import { ApliqueCard } from '../../../components/ApliqueCard/ApliqueCard';
import { ApliqueLista } from '../../../components/ApliqueLista/ApliqueLista';

export const ApliquesEstoque = () => {
  const type = localStorage.getItem('user');

  const [apliques, setApliques] = useState([]);
  const [texto, setTexto] = useState('');
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllApliquesUrl());
    const results = await response.json();
    // setIsLoading(false)
    setApliques(results);
  };
  useEffect(() => {
    setLoading(false);
    loadData();
  }, []);
  function compare(a, b) {
    if (a.number < b.number) return -1;
    if (a.number > b.number) return 1;
    return 0;
  }
  apliques.sort(compare);

  const onChange = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div className="contentApliqueEstoque">
      <div className="cabecalhoEstoqueAplique">
        <h1>Estoque de apliques</h1>
        <div className="headerApliqueEstoque">
          <div className="">
            <input
              type="text"
              className=""
              onChange={onChange}
              value={texto}
              placeholder="Pesquisar"
            />
          </div>
          {type === 'adm' ? (
            <Link
              to={'/apliques-create'}
              className="add-button"
              title="Adicionar novo aplique"
            >
              +
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div>
          {!texto ? (
            <ApliqueLista />
          ) : (
            <Filtro texto={texto} apliques={apliques} />
          )}
        </div>
      )}
    </div>
  );
};
