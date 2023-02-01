import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Apliques.css";
import Modal from "react-modal";
import { Search } from "../../components/Search/Search";
import { ListeApliques } from "../../components/ListApliques/ListeApliques";
import { Api } from "../../Api/Api";
import Filter from "../../components/Filter/Filter";
Modal.setAppElement("#root");

export const Apliques = () => {

  const type = localStorage.getItem("user");
  const navigate = useNavigate();

  const [filter, setFilter] = useState('')

    const [apliques, setApliques] = useState([]);
 
    const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllApliquesUrl());
    const results = await response.json();
    setApliques(results);

  };
  useEffect(() => {
    loadData();
  }, []);

    const searchText = (e) => {
        setFilter(e.target.value)
    }
    console.log(filter);

    let dataSearch = apliques.filter(item =>{
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    })



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
  }, [result]);



  const [display, setDisplay] = useState('')

  // var display = 'a'
  const onChange = (evt) => {
    setResult(evt.target.value);
    setDisplay('b')
    if(evt.target.value === '') {
      setDisplay('')
    } else {
      setDisplay('aaa')
    }
  };

  if(display === '') {
    console.log('nao tem nada');
  } else {
    console.log('texto');
  }


  
//===========================================================

  return (
    <div className="contentAplique">
      <div>
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
                 {aplique.quantidade === 1
                   ? "Este aplique pode fabricar apenas 1 lençol (JUNIOR + Fronha), (SOLTEIRO + Fronha), (SOLTEIRÃO + Fronha), (VIUVA)"
                   : ""}
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
