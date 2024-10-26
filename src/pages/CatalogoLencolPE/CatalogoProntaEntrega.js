import React, { useState } from "react";
import { ListaDeLoncolProntaEntrega } from "../../components/ListaDeLoncolProntaEntrega/ListaDeLoncolProntaEntrega";

export const CatalogoProntaEntrega = () => {
  const [tamanho, setTamanho] = useState("");
  return (
    <div>
      <div className="menuDoCatalogoSintetico">
        <button onClick={() => setTamanho("Berço")}>Berço</button>
        <button onClick={() => setTamanho("Junior")}>Junior</button>
        <button onClick={() => setTamanho("Solteiro")}>Solteiro</button>
        <button onClick={() => setTamanho("Solteirao")}>Solteirão</button>
        <button onClick={() => setTamanho("Viuva")}>Viuva</button>
        <button onClick={() => setTamanho("Casal")}>Casal</button>
        <button onClick={() => setTamanho("Queen")}>Queen</button>
        <button onClick={() => setTamanho("King")}>King</button>
      </div>
      <div>
        <ListaDeLoncolProntaEntrega tamanho={tamanho} />
      </div>
    </div>
  );
};
