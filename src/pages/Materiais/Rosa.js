import React from "react";
import { Api } from "../../Api/Api";
import { useEffect } from "react";
import { useState } from "react";

export const Rosa = () => {
  const [materiais, setMateriais] = useState([]);

  const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllMaterialUrl());
    const results = await response.json();

    setMateriais(results);
  };
  useEffect(() => {
    loadData();
  }, []);

  function compare(a, b) {
    if (a.codigo < b.codigo) return -1;
    if (a.codigo > b.codigo) return 1;
    return 0;
  }
  materiais.sort(compare);

  return (
    <div className="coresLista">
      {materiais.map((material, index) => (
        <div
          key={index}
          className={material.cor === "Rosa" ? "cardMaterial" : "display"}
        >
          <div>
            <img src={material.img} alt="imagem do material" />
          </div>
        </div>
      ))}
    </div>
  );
};
