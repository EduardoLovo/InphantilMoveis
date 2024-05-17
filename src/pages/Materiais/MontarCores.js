import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Api } from "../../Api/Api";

export const MontarCores = () => {
  const [materiais, setMateriais] = useState([]);
  const [externo, setExterno] = useState("");
  const [interno, setInterno] = useState("");
  const [click, setClick] = useState("");

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

  const EscolhaExterno = (e) => {
    const imagemUm = e.target.src;
    setExterno(
      <img className="resultMontagem" src={imagemUm} alt="imagemExterno" />
    );
    setClick("escolhaUm");
  };

  const EscolhaInterno = (e) => {
    const imagemDois = e.target.src;
    console.log(imagemDois);
    setInterno(
      <img className="resultMontagem" src={imagemDois} alt="imagemInterno" />
    );
    setClick("escolhaDois");
  };

  const reset = () => {
    setExterno("");
    setInterno("");
    setClick("");
  };
  return (
    <div>
      <h1 className=" tituloMontar">Montar cores</h1>
      {click === "escolhaDois" ? (
        <div>
          <div className="displayResult">
            <div>
              {externo}
              <p>Externo</p>
            </div>
            <div>
              {interno}
              <p>Interno</p>
            </div>
          </div>
          <div>
            <button onClick={reset} className=" p-1 btnCinza ">
              Escolher Novamente
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {click === "" ? (
        <div>
          <h2 className="ms-5">Externo</h2>
          <div className="coresLista">
            {materiais.map((material, index) => (
              <div
                key={index}
                className={
                  material.cor === "Externo" ? "cardMaterial" : "display"
                }
              >
                <div>
                  <img
                    src={material.img}
                    alt="imagem do material"
                    onClick={EscolhaExterno}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      {click === "escolhaUm" ? (
        <div>
          <h2 className="ms-5">Interno</h2>
          <div className="coresLista">
            {materiais.map((material, index) => (
              <div
                key={index}
                className={
                  material.cor === "Externo" ? "display" : "cardMaterial"
                }
              >
                <div>
                  <img
                    src={material.img}
                    alt="imagem do material"
                    onClick={EscolhaInterno}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
