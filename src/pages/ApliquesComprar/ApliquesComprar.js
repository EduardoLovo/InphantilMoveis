import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../Api/Api';


export const ApliquesComprar = () => {
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
        {apliques.map((aplique, i) => (
          <div key={i} className={aplique.quantidade <= 5 && aplique.estoque === 'Nao' ? '': 'display'}>
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
  )
}
