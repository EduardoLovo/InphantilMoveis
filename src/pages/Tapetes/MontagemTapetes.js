import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import { Link } from "react-router-dom";

export const MontagemTapetes = () => {
  return (
    <div>
      <h1 className="tituloTapetes">TAPETES</h1>
      <div className="LinksCatalogo">
        <hr className="hr" />
        <div className="linksTapete">
          <Link to="/tapete-quatro-cores">QUATRO CORES</Link>
        </div>
        <hr className="hr" />
        <div className="linksTapete">
          <Link to={"/tapete-cinco-cores"}>CINCO CORES</Link>
        </div>
        <hr className="hr" />
        <div className="linksTapete">
          <Link to={"/tapete-seis-cores"}>SEIS CORES</Link>
        </div>
        <hr className="hr" />
        <div className="linksTapete">
          <Link to={"/tapete-sete-cores"}>SETE CORES</Link>
        </div>
        <hr className="hr" />
        <div className="linksTapete">
          <Link to={"/tapete-oito-cores"}>OITO CORES</Link>
        </div>
        <hr className="hr" />
        <div className="linksTapete">
          <Link to={"/tapete-nove-cores"}>NOVE CORES</Link>
        </div>
        <hr className="hr" />
        <div className="linksTapete">
          <Link to={"/tapete-dez-cores"}>DEZ CORES</Link>
        </div>
        <hr className="hr" />
        <div className="linksTapete">
          <Link to={"/tapete-onze-cores"}>ONZE CORES</Link>
        </div>
        <hr className="hr" />
        <div className="linksTapete">
          <Link to={"/tapete-doze-cores"}>DOZE CORES</Link>
        </div>
      </div>
    </div>
  );
};
