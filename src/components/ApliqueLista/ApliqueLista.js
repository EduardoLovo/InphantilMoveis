import React, { useEffect, useState } from 'react';
import { ApliqueCard } from '../ApliqueCard/ApliqueCard';
import { Api } from '../../Api/Api';

export const ApliqueLista = () => {
  const [apliques, setApliques] = useState([]);

  const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllApliquesUrl());
    const results = await response.json();
    // setIsLoading(false)
    setApliques(results);
  };
  useEffect(() => {
    loadData();
  }, []);
  function compare(a, b) {
    if (a.number < b.number) return -1;
    if (a.number > b.number) return 1;
    return 0;
  }
  apliques.sort(compare);

  return (
    <div className="contentApliqueEstoque">
      <div>
        <div className="containerApliquesEstoque">
          {apliques.map((aplique, index) => (
            <div className="col" key={index}>
              <ApliqueCard aplique={aplique} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
