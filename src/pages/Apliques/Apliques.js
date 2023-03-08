import React, { useEffect, useState } from "react";
import "./Apliques.css";
import { useNavigate } from "react-router-dom";
import { ListeApliques } from "../../components/ListApliques/ListeApliques";
import { Api } from "../../Api/Api";
import Modal from "react-modal";
import { Loading } from "../../components/Loading/Loading";
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
  const [removeLoading, setRemoveLoading] = useState(false)

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

  const [display, setDisplay] = useState('listAplic')

  const onChange = (evt) => {
    setResult(evt.target.value);
    if(evt.target.value === '') {
      setDisplay('listAplic')
    } else {
      setDisplay('display')
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

      

      <div className={type === "adm" ? "inputCheck" : "display"}>
        <label onClick={()=>{navigate("/filtrados")}} className='linkFiltro'> Mostrar apliques com 4 ou menos para cortar</label>
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

      {/* <div className={filtrados}>
        <div>{data.map((aplique, i) => (
          <div key={i} className={aplique.quantidade < 5 && aplique.estoque !== 'Nao' ? '': 'display'}>
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
            </div>
          </div>
        ))}
        </div> 
      </div> */}

      <div className={display}> 
        
        <ListeApliques setRemoveLoading={setRemoveLoading}/> 
        
      </div>

      <div className="divBtnBack">
        <button onClick={backPage} className="btnBack">
          Voltar
        </button>
      </div>
    </div>
  );
};

