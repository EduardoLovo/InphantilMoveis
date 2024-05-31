import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";
import { Link } from "react-router-dom";
import { ApliqueCard } from "../ApliqueCard/ApliqueCard";
import { Loading } from "../../../components/Loading/Loading";
import { Filtro } from "../../../components/Filtro";

export const ApliqueListaQuantidade = () => {
  const type = localStorage.getItem("user");

  const [apliques, setApliques] = useState([]);
  const [texto, setTexto] = useState("");
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
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div>
          {!texto ? (
            <div className="containerApliquesEstoque">
              {apliques.map((aplique, index) => (
                <div className="col" key={index}>
                  <ApliqueCard aplique={aplique} />
                </div>
              ))}
            </div>
          ) : (
            <Filtro apliques={apliques} texto={texto} />
          )}
        </div>
      )}
    </div>
  );
};
