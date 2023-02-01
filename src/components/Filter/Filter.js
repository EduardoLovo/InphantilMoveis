import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";


export default function Filter(props) {

  console.log(props.display);

  //FILTER SEARCH DATA API
  const [data, setData] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [result, setResult] = useState("");

  const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllApliquesUrl());
    const results = await response.json();
    setSearchFilter(results)
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const results = searchFilter.filter((resp) =>
      resp.number.toLowerCase().includes(result)
    );
    setData(results);
  }, [result]);

  const onChange = (evt) => {
    setResult(evt.target.value);
  };

  

  return (
    <div className="Filter">
     

      <h1>Search</h1>

      <div className="Appfilter">
        <input
          type="text"
          placeholder="Search here ... "
          value={result}
          onChange={onChange}
        />
        {data.map((r, i) => (
          <ul key={i}>
            
            <li>{r.number}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}