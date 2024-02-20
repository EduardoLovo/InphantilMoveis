import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";
import { Loading } from "../../../components/Loading/Loading";

export const ApliquesParaCortar = () => {
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
              key={index}
              className={
                aplique.quantidade < 5 && aplique.estoque !== "Nao"
                  ? ""
                  : "display"
              }
            >
              <div className="col alingListCards">
                <div className="card border-dark mb-3">
                  <img src={aplique.img} className="card-img-top" alt="..." />
                  <div
                    className={
                      aplique.estoque === "Nao"
                        ? "card-body text-danger"
                        : "card-body text-success"
                    }
                  >
                    <h5 className="card-title">{aplique.number} </h5>
                    <p className="card-text">Estoque = {aplique.quantidade}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
