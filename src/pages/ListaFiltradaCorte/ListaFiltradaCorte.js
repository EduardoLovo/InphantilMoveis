import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import ReactLoading from "react-loading";
import { Api } from '../../Api/Api';
import './ListaFiltradaCorte.css'


export const ListaFiltradaCorte = () => {
  const navigate = useNavigate();
  const [apliques, setApliques] = useState([]);
 
    const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllApliquesUrl());
    const results = await response.json();
        
    setApliques(results);
  };
    useEffect(() => {
        loadData();
    }, []);

    console.log(apliques);

  return (
    <div className='filtroContent'>  
      <button onClick={()=>{navigate("/apliques")}} className='btnBack margin'>Voltar para catalogo</button>
       <div className='listAplic'>
        {apliques.map((aplique, index) => (
          <div key={index} className={aplique.quantidade < 5 && aplique.estoque !== 'Nao' ? '': 'display'}>
            <div class="col alingListCards">
            <div class="card border-dark mb-3">
              <img src={aplique.img} class="card-img-top" alt="..."/>
              <div class={aplique.estoque === "Nao" ? "card-body text-danger" : "card-body text-success"}>
                <h5 class="card-title">{aplique.number} </h5>
                <p class="card-text">
                  Estoque = {aplique.quantidade} 
                </p>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>  
    </div>
  )
}
