import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Apliques.css";
import Modal from "react-modal";
import { Search } from "../../components/Search/Search";
import { ListeApliques } from "../../components/ListApliques/ListeApliques";
import { Api } from "../../Api/Api";
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

  console.log(filter);
  console.log(setFilter);

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

          
      {/* <div>
        <input 
        type="text"
        value={filter}
        onChange={searchText.bind(this)}
        id='searchInput'
        name="searchInput"
        />

          {filter === ''? '':
          dataSearch.map((item, index) => {
            return(
                <div>
                    <img src={item.img}/>
                </div>
            )
        })
          }
        
    </div> */}

      <div>
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
