import React from 'react'
import { Api } from '../../Api/Api';
import { useState } from 'react';
import { useEffect } from 'react';

export const Bege = () => {
  const [materiais, setMateriais] = useState([]);

  const loadData = async () => {
  const response = await Api.buildApiGetRequest(Api.readAllMaterialUrl());
  const results = await response.json();
      
  setMateriais(results);
};
  useEffect(() => {
      loadData();
  }, []);

  function compare(a, b) {
      if (a.codigo < b.codigo) return -1;
      if (a.codigo > b.codigo) return 1;
      return 0;
    }
    materiais.sort(compare);

return (
  <div className='coresLista'>
      {materiais.map((material, index) => (
          <div key={index} className={material.cor === 'Bege' ? 'cardMaterial' : 'display'}>
              {console.log(material.cor)}
              <div>
                  <img src={material.img}  alt='imagem do material'/>
              </div>
          </div>
      ))}
  </div>
)
}
