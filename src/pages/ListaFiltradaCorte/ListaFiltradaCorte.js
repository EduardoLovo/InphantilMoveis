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
        <div>{apliques.map((aplique, i) => (
          <div key={i} className={aplique.quantidade < 5 && aplique.estoque !== 'Nao' ? '': 'display'}>
            <div  className={aplique.estoque === "Nao" ? "cartRed" : "cart"}>
              <h3 className="numberCart">{aplique.number}</h3>
              <img src={aplique.img} alt="img" className="imgCart"/>
              <p className="quantCart">
                Em estoque:{" "}
                <span className={aplique.estoque === "Nao"  ? "red" : "green"}>
                  {" "}
                  {aplique.quantidade}
                </span>
              </p>
            </div>
          </div>
        ))}
        </div> 
      </div>  
    </div>
  )
}
