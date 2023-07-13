import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Api } from '../../Api/Api';

export const CatalogoTecidos = () => {
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
        <h1>Links</h1>
        <p>
          <a href='./tecidosjunior'>Junior</a>
        </p>
        <p>
        <a href='./tecidosSolteiro'>Solteiro / Solteirão</a>
        </p>
        <p>
          <a href='./tecidosViuva'>Viuva</a>
        </p>
        <p>
          <a href='./tecidosCasal'>Casal</a>
        </p>
    </div>
  )
}
