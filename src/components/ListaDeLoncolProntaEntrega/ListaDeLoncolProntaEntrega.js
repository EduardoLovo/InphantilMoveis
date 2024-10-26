import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import LencolProntaEntregaCard from "../LencolProntaEntregaCard/LencolProntaEntregaCard";

export const ListaDeLoncolProntaEntrega = (props) => {
  const tamanho = props.tamanho;

  const [lencolAplique, setLencolAplique] = useState([]);

  const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllLencolUrl());
    const results = await response.json();

    setLencolAplique(results);
  };
  useEffect(() => {
    loadData();
  }, []);

  function compare(a, b) {
    if (a.number < b.number) return -1;
    if (a.number > b.number) return 1;
    return 0;
  }

  lencolAplique.sort(compare);

  return (
    <div>
      <div className="cabecalho">
        {!tamanho ? <h1>Escolha um tamanho</h1> : <h1>{tamanho}</h1>}
      </div>
      <div className="container">
        {lencolAplique.map((lencol, index) => (
          <div key={index}>
            {!tamanho ? (
              ""
            ) : (
              <div key={index}>
                {lencol.tamanho === tamanho && (
                  <LencolProntaEntregaCard lencol={lencol} key={index} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
