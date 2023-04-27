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
          <div>
            <div class="col alingListCards" key={index}>
              <div class="card">
                <img src={aplique.img} class="card-img-top" alt="..."/>
                <div class={aplique.estoque === "Nao" ? "card-body text-danger" : "card-body text-success"}>
                  <h5 class="card-title">{aplique.number} </h5>
                  <p class="card-text">
                    Estoque = {aplique.quantidade}
                    {type === "adm" ? (
                    <button
                            type="button" 
                            class="btn btn-outline-warning"
                            onClick={() => {
                              navigate(`/aplique/${aplique._id}`);
                            }}
                          >
                            Editar
                          </button>
                  ): ""}
                    </p>
                </div>
              </div>
            </div>  
          </div>
        ))}
      </div>
  )
}
