import React, { useEffect, useState } from 'react';
import { Api } from '../../Api/Api';
import { ApliqueCard } from '../../components/ApliqueCard/ApliqueCard';

let apliques = [];

export const loadData = async () => {
  const response = await Api.buildApiGetRequest(Api.readAllApliquesUrl());
  const results = await response.json();
  apliques = results;
};

const Testes = () => {
  const [apliquesState, setApliquesState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await loadData();
      setApliquesState([...apliques]);
    };
    fetchData();
  }, []);

  function compare(a, b) {
    if (a.number < b.number) return -1;
    if (a.number > b.number) return 1;
    return 0;
  }

  apliquesState.sort(compare);

  return (
    <div className="contentApliqueEstoque">
      <div>
        <div className="containerApliquesEstoque">
          {apliquesState.map((aplique, index) => (
            <div className="col" key={index}>
              <ApliqueCard aplique={aplique} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { apliques };
export default Testes;
