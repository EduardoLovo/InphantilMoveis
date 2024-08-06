import React from 'react';
import { Link } from 'react-router-dom';

export const MontagemTapetes = () => {
  return (
    <div>
      <h1 className="tituloTapetes">COMPOSIÇÕES DE TAPETES</h1>
      <div className="LinksCatalogo">
        <hr className="hr" />
        <div className="linksTapete">
          <Link to="/tapete-quatro-cores">
            <p>QUATRO CORES</p>
          </Link>
        </div>
        <hr className="hr" />
        <div className="linksTapete">
          <Link to={'/tapete-cinco-cores'}>
            <p>CINCO CORES</p>
          </Link>
        </div>
        <hr className="hr" />
        <div className="linksTapete">
          <Link to={'/tapete-seis-cores'}>
            <p>SEIS CORES</p>
          </Link>
        </div>
        <hr className="hr" />
        <div className="linksTapete">
          <Link to={'/tapete-sete-cores'}>
            <p>SETE CORES</p>
          </Link>
        </div>
        <hr className="hr" />
        <div className="linksTapete">
          <Link to={'/tapete-oito-cores'}>
            <p>OITO CORES</p>
          </Link>
        </div>
        <hr className="hr" />
        <div className="linksTapete">
          <Link to={'/tapete-nove-cores'}>
            <p>NOVE CORES</p>
          </Link>
        </div>
        <hr className="hr" />
        <div className="linksTapete">
          <Link to={'/tapete-dez-cores'}>
            <p>DEZ CORES</p>
          </Link>
        </div>
        <hr className="hr" />
        <div className="linksTapete">
          <Link to={'/tapete-onze-cores'}>
            <p>ONZE CORES</p>
          </Link>
        </div>
        <hr className="hr" />
        <div className="linksTapete">
          <Link to={'/tapete-doze-cores'}>
            <p>DOZE CORES</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
