import React from "react";
import { Api } from "../../Api/Api";
import { useState } from "react";
import { useEffect } from "react";
import "./Tapete.css";

export const DuasCores = () => {
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

  const [listas, setListas] = useState(0);
  const [cor1, setCor1] = useState("");
  const [cor2, setCor2] = useState("");

  const primeiro = (e) => {
    setListas(1);
    const cor = e.target.src;
    setCor1(<img className="imagemteste" src={cor} alt="..." />);
  };
  const segundo = (e) => {
    setListas(0);
    setCor2(<img className="imagemteste" src={e.target.src} alt="..." />);
  };

  return (
    <div>
      <div className="resultadoTapete">
        <div className="coresListaTapete">
          <span>Cor 1</span>
          <span>Cor 2</span>
        </div>
        <div className="d-flex">
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
        </div>

        <div className="d-flex ">
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
        </div>
        <div className="d-flex ">
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
        </div>
        <div className="d-flex ">
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
        </div>
        <div className="d-flex ">
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
        </div>
        <p className="d-flex ">
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
          {cor1}
          {cor2}
        </p>
      </div>
      <div className="testes">
        {listas === 0 ? (
          <div className="listaMaterialTapete">
            {materiais.map((material, id) => (
              <div>
                {material.cor === "Externo" ? (
                  ""
                ) : (
                  <div key={id} className="card ">
                    <img
                      src={material.img}
                      alt="imagem do material"
                      onClick={primeiro}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {listas === 1 ? (
          <div className="listaMaterialTapete">
            {materiais.map((material, id) => (
              <div>
                {material.cor === "Externo" ? (
                  ""
                ) : (
                  <div key={id} className="card ">
                    <img
                      src={material.img}
                      alt="imagem do material"
                      onClick={segundo}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
