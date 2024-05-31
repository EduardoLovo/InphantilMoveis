import React from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../../Api/Api";
import { useState } from "react";
import { useEffect } from "react";
import TecidoCard from "../TecidoCard/TecidoCard";

export const TecidosParaLencol = () => {
  const type = localStorage.getItem("user");
  const [tecidos, setTecidos] = useState([]);

  const navigate = useNavigate();

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
    <div className="">
      {type === "adm" ? (
        <div className="p-3">
          <button
            onClick={() => {
              navigate("/tecidos-create");
            }}
            className=" btnPadrao"
          >
            Adicionar novo Tecido
          </button>
        </div>
      ) : (
        ""
      )}

      <div>
        <h2 className="ms-5">Estoque de Tecido</h2>
        <div className="d-flex flex-wrap justify-content-start">
          {tecidos.map((tecido, index) => (
            <div className="" key={index}>
              {tecido.tamanho === "Junior - M" ? (
                <TecidoCard tecido={tecido} />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
