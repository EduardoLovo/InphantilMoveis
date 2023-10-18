import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";

export const CatalogoDeTecidos = () => {
  const [tecidos, setTecidos] = useState([]);

  const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllTecidolUrl());
    const results = await response.json();

    setTecidos(results);
  };

  useEffect(() => {
    loadData();
  }, []);

  function compare(a, b) {
    if (a.cor < b.cor) return -1;
    if (a.cor > b.cor) return 1;
    return 0;
  }

  tecidos.sort(compare);

  return (
    <div>
      <h1 className="ms-3">Links</h1>
      <div className="ms-2 LinksCatalogo">
        <hr className="hr" />
        <div>
          <a href="./catalogo-junior">Junior:</a>
          <p>https://inphantil-moveis.vercel.app/catalogo-junior</p>
        </div>
        <hr className="hr" />
        <div>
          <a href="./catalogo-solteiro-solteirao">Solteiro / Solteirão</a>
          <p>https://inphantil-moveis.vercel.app/catalogo-solteiro-solteirao</p>
        </div>
        <hr className="hr" />
        <div>
          <a href="./catalogo-viuva">Viuva</a>
          <p>https://inphantil-moveis.vercel.app/catalogo-viuva</p>
        </div>
        <hr className="hr" />
        <div>
          <a href="./catalogo-casal">Casal</a>
          <p>https://inphantil-moveis.vercel.app/catalogo-casal</p>
        </div>
        <hr className="hr" />
        <div>
          <a href="./catalogo-bqk">Demais Tamanhos</a>
          <p>https://inphantil-moveis.vercel.app/catalogo-bqk</p>
        </div>
      </div>
    </div>
  );
};
