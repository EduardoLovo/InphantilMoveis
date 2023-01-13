import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Api/Api";

import "./Apliques.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

export const Apliques = () => {
  const type = localStorage.getItem("user");
  const navigate = useNavigate();
  const [apliques, setApliques] = useState([]);
  // const [busca, setBusca] = useState("");

  const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllApliquesUrl());
    const results = await response.json();

    setApliques(results);
  };
  useEffect(() => {
    loadData();
  }, []);

  function compare(a, b) {
    if (a.number < b.number) return -1;
    if (a.number > b.number) return 1;
    return 0;
  }
  apliques.sort(compare);

  const backPage = () => {
    navigate("/home");
  };

  return (
    <div className="contentAplique">
      <div>
        <h1>Estoque de apliques</h1>
      </div>
      <div className="divBtnBack">
        {type === "adm" ? (
          <button
            className="btnAdd btnBack"
            onClick={() => {
              navigate("/create");
            }}
          >
            Adicionar novo aplique
          </button>
        ) : (
          ""
        )}
        <button onClick={backPage} className="btnBack">
          Voltar
        </button>
      </div>

      <div className="listAplic">
        {apliques.map((aplique, index) => (
          <div className="cart">
            <h3>{aplique.number}</h3>
            <img src={aplique.img} alt="img" />
            <p>
              Em estoque:{" "}
              <span className={aplique.quantidade > 4 ? "green" : "red"}>
                {" "}
                {aplique.quantidade}
              </span>
            </p>
            {aplique.quantidade === 1
              ? "Este aplique pode fabricar apenas 1 lençol (JUNIOR + Fronha), (SOLTEIRO + Fronha), (SOLTEIRÃO + Fronha), (VIUVA)"
              : ""}
            {type === "adm" ? (
              <div>
                <button
                  className="btnBack btnEdit"
                  onClick={() => {
                    navigate(`/aplique/${aplique._id}`);
                  }}
                >
                  Editar
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div className="divBtnBack">
        <button onClick={backPage} className="btnBack">
          Voltar
        </button>
      </div>
    </div>
  );
};
