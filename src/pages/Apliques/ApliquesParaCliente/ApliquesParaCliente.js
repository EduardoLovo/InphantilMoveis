import React, { useEffect, useState } from 'react';
import { Api } from '../../../Api/Api';
import { Loading } from '../../../components/Loading/Loading';
import { ApliqueCard } from '../../../components/ApliqueCard/ApliqueCard';

export const ApliquesParaCliente = () => {
  const [apliques, setApliques] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllApliquesUrl());
    const results = await response.json();
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

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          {apliques.map((aplique, index) => (
            <div
              className={
                aplique.estoque === 'Nao' && aplique.quantidade === '0'
                  ? 'display'
                  : 'col '
              }
            >
              <ApliqueCard
                codigo={aplique.number}
                img={aplique.img}
                id={aplique._id}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
