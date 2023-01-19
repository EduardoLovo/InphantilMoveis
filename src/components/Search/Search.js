import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";

export const Search = () => {
    
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

  return (
    <div>
        <input 
        type="text"
        value={filter}
        onChange={searchText.bind(this)}
        />

        {dataSearch.map((item, index) => {
            return(
                <div>
                    <img src={item.img}/>
                </div>
            )
        })}
    </div>
  );
};