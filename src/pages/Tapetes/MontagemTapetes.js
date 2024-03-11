import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import { Link } from "react-router-dom";

export const MontagemTapetes = () => {
  return (
    <div>
      <h1 className="ms-3">TAPETES</h1>
      <div className="ms-2 LinksCatalogo">
        <hr className="hr" />
        <div>
          <Link to="/tapete-quatro-cores">QUATRO CORES</Link>
        </div>
        <hr className="hr" />
        <div>
          <Link to={"/tapete-cinco-cores"}>CINCO CORES</Link>
        </div>
        <hr className="hr" />
        <div>
          <Link to={"/tapete-seis-cores"}>SEIS CORES</Link>
        </div>
        <hr className="hr" />
        <div>
          <Link to={"/tapete-sete-cores"}>SETE CORES</Link>
        </div>
      </div>
    </div>
  );
};
