import React from "react";
import { Api } from "../../Api/Api";
import { useState } from "react";
import { useEffect } from "react";
import { Loading } from "../../components/Loading/Loading";

export const Amarelo = () => {
  const [materiais, setMateriais] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllMaterialUrl());
    const results = await response.json();

    setMateriais(results);
  };
  useEffect(() => {
    setLoading(false);
    loadData();
  }, []);

  function compare(a, b) {
    if (a.codigo < b.codigo) return -1;
    if (a.codigo > b.codigo) return 1;
    return 0;
  }
  materiais.sort(compare);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="coresLista">
          {materiais.map((material, index) => (
            <div>
              {loading ? (
                <Loading />
              ) : (
                <div
                  key={index}
                  className={
                    material.cor === "Amarelo" ? "cardMaterial" : "display"
                  }
                >
               
                  <div>
                    <img src={material.img} alt="imagem do material" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
