import React, { useEffect, useState } from 'react';
import { Api } from '../../../Api/Api';
import SinteticoCard from '../../../components/SinteticoCard/SinteticoCard';
import './SinteticoComposicoes.css';

export const SinteticoComposicoes = () => {
  const [sinteticos, setSinteticos] = useState([]);

  const [externo, setExterno] = useState('');
  const [interno, setInterno] = useState('');

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

  const EscolhaDoExterno = (e) => {
    setExterno(
      <div className="imagemResultado ">
        <img src={e.target.src} alt="sintetico externo" title={''} />
        <div className="">
          <p>Externo</p>
          {/* <p>{e.target.title}</p> */}
        </div>
      </div>
    );
  };

  const EscolhaDoInterno = (e) => {
    setInterno(
      <div className="imagemResultado ">
        <img src={e.target.src} className="" alt=".." title={''} />
        <div className="">
          <p>Interno</p>
          {/* <p>{e.target.title}</p> */}
        </div>
      </div>
    );
  };

  const NovaComposição = () => {
    setExterno('');
    setInterno('');
  };

  return (
    <div className="contentComposição">
      <h1>Composição</h1>
      <div className="ResultadoDaComposição">
        <div>{externo}</div>
        <div>{interno}</div>
      </div>

      {!externo && (
        <div>
          <h3>Escolha a cor externa</h3>
          <div className="coresLista">
            {sinteticos.map((sintetico, index) => (
              <div key={index} onClick={EscolhaDoExterno}>
                {sintetico.cor === 'Externo' && (
                  <SinteticoCard sintetico={sintetico} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {!interno && (
        <div>
          <h3>Escolha a cor interno</h3>
          <div className="coresLista">
            {sinteticos.map((sintetico, index) => (
              <div key={index} onClick={EscolhaDoInterno}>
                {sintetico.cor !== 'Externo' && (
                  <SinteticoCard sintetico={sintetico} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <button onClick={NovaComposição} className="botaoEscolherNovamente">
        Escolher Novamente
      </button>
    </div>
  );
};
