import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Api/Api";

export const ListeApliques = () => {
    const type = localStorage.getItem("user");

    const [apliques, setApliques] = useState([]);
 
    const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllApliquesUrl());
    const results = await response.json();
        
    setApliques(results);
  };
    useEffect(() => {
        loadData();
    }, []);

    const navigate = useNavigate();
    
  function compare(a, b) {
    if (a.number < b.number) return -1;
    if (a.number > b.number) return 1;
    return 0;
  }
  apliques.sort(compare);

  return (
    <div className="listAplic">
        {apliques.map((aplique, index) => (
          <div key={index}  className={aplique.estoque === "Nao" ? "cartRed" : "cart"}>
            <h3 className="numberCart">{aplique.number}</h3>
            <img src={aplique.img} alt="img" className="imgCart"/>
            <p className="quantCart">
              Em estoque:{" "}
              <span className={aplique.estoque === "Nao"  ? "red" : "green"}>
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
  )
}
