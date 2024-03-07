import React, { useEffect, useState } from "react";
// import { Api } from '../Api/Api';
import { useNavigate } from "react-router-dom";
import { ApliqueCard } from "../pages/Apliques/ApliqueCard/ApliqueCard";

export const Filtro = (props) => {
  const apliques = props.apliques;
  const navigate = useNavigate();
  const [filtrado, setFiltrado] = useState([]);
  const texto = props.texto;

  const type = localStorage.getItem("user");

  useEffect(() => {
    const results = apliques.filter((resp) =>
      resp.number.toLowerCase().includes(texto.toLowerCase())
    );
    setFiltrado(results);
    // eslint-disable-next-line
  }, [texto]);

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
