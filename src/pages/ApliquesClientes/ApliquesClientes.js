import React, { useEffect, useState } from 'react'
import { Api } from '../../Api/Api';
import './ApliquesClientes.css'


export const ApliquesClientes = () => {

    const [apliques, setApliques] = useState([]);
 
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

  return (
    <div className="listAplic apliClient">
        {apliques.map((aplique, index) => (
          
          <div  className={aplique.estoque === "Nao" && aplique.quantidade === "0" ? "displayApliClien": 'cart cardcliente'}>
            <h3 className="numberCart">{aplique.number}</h3>
            <img src={aplique.img} alt="img" className="imgCart"/>
          </div>
        
        
        ))}
        
      </div>
  )
}
