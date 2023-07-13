import { useNavigate } from 'react-router-dom';
import { Api } from '../../../Api/Api';
import React, { useEffect, useState } from 'react'

export const TecidosSolteiro = () => {
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
  
    tecidos.sort(compare)
  return (
    <div> 
         <h2 className='ms-5'>Solteiro / Solteirão</h2>
        <div className='d-flex flex-wrap justify-content-start'>
          {tecidos.map((tecido, index) => (
            <a href='./apliqueslist' imagem={tecido.img} key={index}>
              <div className={tecido.estoque === "Nao" ? 'display' : ''} >
                {tecido.tamanho === 'Solteiro / Solteirão - G' ? 
                <div className="card border-dark mb-3">
                  <img src={tecido.img} className="card-img-top" alt="..."/>
                  <div className={tecido.quantidade <= "5" ? "card-body text-danger " : "card-body text-success"}>
                    <p>Cor: {tecido.cor}</p>
                  </div>
                </div>
                :''}
            </div>
            </a>
            ))}
        </div>
    </div>
  )
}
