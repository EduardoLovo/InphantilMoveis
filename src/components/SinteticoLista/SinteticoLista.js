import React from 'react';
import { Api } from '../../Api/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import SinteticoCard from '../SinteticoCard/SinteticoCard';
import './SinteticoLista.css';

export const SinteticoLista = (props) => {
  const cor = props.cor;

  const [sinteticos, setSinteticos] = useState([]);

  const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllMaterialUrl());
    const results = await response.json();

    setSinteticos(results);
  };
  useEffect(() => {
    loadData();
  }, []);
  function compare(a, b) {
    if (a.codigo < b.codigo) return -1;
    if (a.codigo > b.codigo) return 1;
    return 0;
  }
  sinteticos.sort(compare);

  return (
    <div>
      <div className="listaSintetico">
        {sinteticos.map((sintetico, id) => (
          <div key={id}>
            {!cor ? (
              <SinteticoCard sintetico={sintetico} />
            ) : (
              <div>
                {sintetico.cor === cor && (
                  <SinteticoCard sintetico={sintetico} key={id} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
