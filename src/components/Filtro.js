import React, { useEffect, useState } from "react";
import { ApliqueCard } from "../pages/Apliques/ApliqueCard/ApliqueCard";

export const Filtro = (props) => {
  const apliques = props.apliques;
  const [filtrado, setFiltrado] = useState([]);
  const texto = props.texto;

  useEffect(() => {
    const results = apliques.filter((resp) =>
      resp.number.toLowerCase().includes(texto.toLowerCase())
    );
    setFiltrado(results);

    // eslint-disable-next-line
  }, [texto]);

  console.log(filtrado);

  function compare(a, b) {
    if (a.number < b.number) return -1;
    if (a.number > b.number) return 1;
    return 0;
  }

  filtrado.sort(compare);

  return (
    <div>
      {texto === "" ? (
        ""
      ) : (
        <div className="container">
          {filtrado.map((aplique, index) => (
            <div className="col " key={index}>
              <ApliqueCard aplique={aplique} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
