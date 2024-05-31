import React from "react";
import { Api } from "../../Api/Api";
import { useState } from "react";
import { useEffect } from "react";
import "./Tapete.css";

export const NoveCores = () => {
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
  const [cor3, setCor3] = useState("");
  const [cor4, setCor4] = useState("");
  const [cor5, setCor5] = useState("");
  const [cor6, setCor6] = useState("");
  const [cor7, setCor7] = useState("");
  const [cor8, setCor8] = useState("");
  const [cor9, setCor9] = useState("");

  const primeiro = (e) => {
    setListas(1);
    const cor = e.target.src;
    setCor1(<img className="imagemteste" src={cor} alt="..." />);
  };
  const segundo = (e) => {
    setListas(2);
    setCor2(<img className="imagemteste" src={e.target.src} alt="..." />);
  };
  const terceiro = (e) => {
    setListas(3);
    setCor3(<img className="imagemteste" src={e.target.src} alt="..." />);
  };
  const quarto = (e) => {
    setListas(4);
    setCor4(<img className="imagemteste" src={e.target.src} alt="..." />);
  };
  const quinto = (e) => {
    setListas(5);
    setCor5(<img className="imagemteste" src={e.target.src} alt="..." />);
  };
  const sexto = (e) => {
    setListas(6);
    setCor6(<img className="imagemteste" src={e.target.src} alt="..." />);
  };
  const setimo = (e) => {
    setListas(7);
    setCor7(<img className="imagemteste" src={e.target.src} alt="..." />);
  };
  const oitavo = (e) => {
    setListas(8);
    setCor8(<img className="imagemteste" src={e.target.src} alt="..." />);
  };
  const nono = (e) => {
    setListas(0);
    setCor9(<img className="imagemteste" src={e.target.src} alt="..." />);
  };

  return (
    <div>
      <div className="resultadoTapete">
        <div className="coresListaTapete">
          {/* <span>Cor 1</span>
          <span>Cor 2</span>
          <span>Cor 3</span>
          <span>Cor 4</span>
          <span>Cor 5</span>
          <span>Cor 6</span>
          <span>Cor 7</span>
          <span>Cor 8</span>
          <span>Cor 9</span> */}
        </div>
        <div className="d-flex">
          {cor1}
          {cor2}
          {cor3}
          {cor4}
          {cor5}
          {cor6}
          {cor7}
          {cor8}
          {cor9}
          {cor1}
          {cor2}
          {cor3}
          {cor4}
          {cor5}
        </div>
        <div className="d-flex ">
          {cor9}
          {cor1}
          {cor2}
          {cor3}
          {cor4}
          {cor5}
          {cor6}
          {cor7}
          {cor8}
          {cor9}
          {cor1}
          {cor2}
          {cor3}
          {cor4}
        </div>
        <div className="d-flex ">
          {cor8}
          {cor9}
          {cor1}
          {cor2}
          {cor3}
          {cor4}
          {cor5}
          {cor6}
          {cor7}
          {cor8}
          {cor9}
          {cor1}
          {cor2}
          {cor3}
        </div>
        <div className="d-flex ">
          {cor7}
          {cor8}
          {cor9}
          {cor1}
          {cor2}
          {cor3}
          {cor4}
          {cor5}
          {cor6}
          {cor7}
          {cor8}
          {cor9}
          {cor1}
          {cor2}
        </div>
        <div className="d-flex ">
          {cor6}
          {cor7}
          {cor8}
          {cor9}
          {cor1}
          {cor2}
          {cor3}
          {cor4}
          {cor5}
          {cor6}
          {cor7}
          {cor8}
          {cor9}
          {cor1}
        </div>
        <p className="d-flex ">
          {cor5}
          {cor6}
          {cor7}
          {cor8}
          {cor9}
          {cor1}
          {cor2}
          {cor3}
          {cor4}
          {cor5}
          {cor6}
          {cor7}
          {cor8}
          {cor9}
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
        {listas === 2 ? (
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
                      onClick={terceiro}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {listas === 3 ? (
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
                      onClick={quarto}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {listas === 4 ? (
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
                      onClick={quinto}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {listas === 5 ? (
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
                      onClick={sexto}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {listas === 6 ? (
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
                      onClick={setimo}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {listas === 7 ? (
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
                      onClick={oitavo}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {listas === 8 ? (
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
                      onClick={nono}
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
