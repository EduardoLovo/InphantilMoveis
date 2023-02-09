import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Apliques.css";
import Modal from "react-modal";
import { ListeApliques } from "../../components/ListApliques/ListeApliques";
import { Api } from "../../Api/Api";
Modal.setAppElement("#root");

export const Apliques = () => {

  const type = localStorage.getItem("user");
  const navigate = useNavigate();

  const backPage = () => {
    navigate("/home");
  };

  // Filtro===============================================
  const [data, setData] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [result, setResult] = useState("");

  const loadFilter = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllApliquesUrl());
    const results = await response.json();
    setSearchFilter(results)
  }

  useEffect(() => {
    loadFilter();
  }, []);

  useEffect(() => {
    const results = searchFilter.filter((resp) =>
      resp.number.toLowerCase().includes(result)
    );
    setData(results);
    // eslint-disable-next-line
  }, [result]); 

  const [display, setDisplay] = useState('')

  const onChange = (evt) => {
    setResult(evt.target.value);
    setDisplay('b')
    if(evt.target.value === '') {
      setDisplay('')
    } else {
      setDisplay('aaa')
    }
  };

//===========================================================

  return (
    <div className="contentAplique">
      <div className="divH1">
        <h1>Estoque de apliques</h1>
      </div>
      <div className="divBtnBack">
        {type === "adm" ? (
          <button
            className="btnAdd btnBack"
            onClick={() => {
              navigate("/create");
            }}
          >
            Adicionar novo aplique
          </button>
        ) : (
          ""
        )}
        <button onClick={backPage} className="btnBack">
          Voltar
        </button>
      </div>
      {/* <Filter />; */}
      <div className="Filter">
        <div className="Appfilter">
          <input
            type="text"
            placeholder="Procurar ... "
            value={result}
            onChange={onChange}
          />
          <div className={display === '' ? 'display': 'listAplic'}>
            {data.map((aplique, i) => (
              <div  key={i}>
                <div  className={aplique.estoque === "Nao" ? "cartRed" : "cart"}>
                  <h3 className="numberCart">{aplique.number}</h3>
                  <img src={aplique.img} alt="img" className="imgCart"/>
                  <p className="quantCart">
                    Em estoque:{" "}
                    <span className={aplique.estoque === "Nao"  ? "red" : "green"}>
                      {" "}
                      {aplique.quantidade}
                    </span>
                  </p>
                  {type === "adm" ? (
                    <div>
                      <button
                        className="btnBack btnEdit"
                        onClick={() => {
                          navigate(`/aplique/${aplique._id}`);
                        }}
                      >
                        Editar
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
            </div>
            ))}
          </div>
        </div>
      </div>

      <div className={display === '' ? 'setDisplay': 'display'}>
        <ListeApliques />
      </div>

      <div className="divBtnBack">
        <button onClick={backPage} className="btnBack">
          Voltar
        </button>
      </div>
    </div>
  );
};
