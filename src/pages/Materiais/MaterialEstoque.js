import React from 'react';
import { Api } from '../../Api/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MaterialCard from './MaterialCard';

export const MaterialEstoque = () => {
  const [materiais, setMateriais] = useState([]);

  const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllMaterialUrl());
    const results = await response.json();

    setMateriais(results);
  };
  useEffect(() => {
    loadData();
  }, []);

  function compare(a, b) {
    if (a.codigo < b.codigo) return -1;
    if (a.codigo > b.codigo) return 1;
    return 0;
  }
  materiais.sort(compare);

  return (
    <div>
      <Link to="/material-create">
        <button className="btnCinza">Adicionar novo material</button>
      </Link>
      <div className="estoqueMaterial">
        {materiais.map((material, id) => (
          <MaterialCard material={material} key={id} />
        ))}
      </div>
    </div>
  );
};
