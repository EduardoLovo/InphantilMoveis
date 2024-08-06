import React, { useEffect, useState } from 'react';
import { Api } from '../../../Api/Api';
import { Loading } from '../../../components/Loading/Loading';
import { ApliqueCard } from '../../../components/ApliqueCard/ApliqueCard';

export const ApliquesParaComprar = () => {
  const [apliques, setApliques] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllApliquesUrl());
    const results = await response.json();
    setApliques(results);
  };

  useEffect(() => {
    loadData();
    setLoading(false);
  }, []);

  function compare(a, b) {
    if (a.number < b.number) return -1;
    if (a.number > b.number) return 1;
    return 0;
  }
  
  apliques.sort(compare);

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          {apliques.map((aplique, index) => (
            <div
              key={index}
              className={
                aplique.quantidade <= 5 && aplique.estoque === 'Nao'
                  ? ''
                  : 'display'
              }
            >
              <ApliqueCard aplique={aplique} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
