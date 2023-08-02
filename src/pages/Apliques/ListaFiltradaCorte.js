import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import ReactLoading from "react-loading";
import { Api } from '../../Api/Api';


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
      <button onClick={()=>{navigate("/apliques")}} className='btnBack m-4'>Voltar para catalogo</button>
       <div className='listAplic'>
        {apliques.map((aplique, index) => (
          <div key={index} className={aplique.quantidade < 5 && aplique.estoque !== 'Nao' ? '': 'display'}>
            <div className="col alingListCards">
            <div className="card border-dark mb-3">
              <img src={aplique.img} className="card-img-top" alt="..."/>
              <div className={aplique.estoque === "Nao" ? "card-body text-danger" : "card-body text-success"}>
                <h5 className="card-title">{aplique.number} </h5>
                <p className="card-text">
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
