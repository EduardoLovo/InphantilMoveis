import React from "react";
import { Api } from "../Api/Api";
import { useState } from "react";
import { useEffect } from "react";
import { Loading } from "../components/Loading/Loading";

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
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <div>
          {apliques.map((aplique, index) => (
            <div className={aplique.estoque === "Nao" ? "display" : "col "}>
              <div className="card border-dark mb-3">
                <img src={aplique.img} className="card-img-top" alt="..." />
                <div className="card-body text-warning">
                  <h5 className="card-title text-center">{aplique.number} </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
