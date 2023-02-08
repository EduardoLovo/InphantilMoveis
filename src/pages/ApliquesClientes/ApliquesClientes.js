import React, { useEffect, useState } from 'react'
import { Api } from '../../Api/Api';
import { ListeApliques } from '../../components/ListApliques/ListeApliques';

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
  return (
    <div className="listAplic">
        {apliques.map((aplique, index) => (
          <div  className="cart">
            <h3 className="numberCart">{aplique.number}</h3>
            <img src={aplique.img} alt="img" className="imgCart"/>
          </div>
        ))}
        
      </div>
  )
}
