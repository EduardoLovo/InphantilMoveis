import React from "react";
import { Api } from "../../../Api/Api";
import { useState } from "react";
import { useEffect } from "react";
import { Loading } from "../../../components/Loading/Loading";
import { ApliqueCard } from "../ApliqueCard/ApliqueCard";
import "./ApliquesParaCabana.css";

export const ApliquesParaCabana = () => {
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
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <div className="containerApliqueCabanas">
          <div>
            <h1>Apliques para cabana</h1>
          </div>
          <div className="apliqueCabanaLista">
            {apliques.map((aplique, index) => (
              <div className={aplique.estoque === "Nao" ? "display" : "col "}>
                <ApliqueCard aplique={aplique} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
