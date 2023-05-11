import React from 'react'
import { Api } from '../../Api/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { TamanhosLencol } from '../../components/TamanhosLencol/TamanhosLencol';

export const Viuva = () => {
    const [lencolAplique, setLencolAplique] = useState([]);
 
    const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllLencolUrl());
    const results = await response.json();
        
    setLencolAplique(results);
  };
    useEffect(() => {
        loadData();
    }, []);


  return (
    <div>
      <TamanhosLencol/>
      <h1>Viuva</h1>
        <div className='listAplic'>
            {lencolAplique.map((lencol, index) => (
                <div key={index} className={lencol.tamanho === "Viuva" ? "col alingListCards" : "displayApliClien"}>
                  <div class="card">
                    <img src={lencol.img} class="card-img-top" alt="..."/>
                    <div class="card-body text-warning">
                      <h5 class="card-title text-center">{lencol.number} </h5>
                      <p>Estoque: {lencol.quantidade}</p>
                      <span>{lencol.tamanho}</span>
                      <span> - {lencol.cor}</span>
                    </div>
                  </div>
              </div>   
            ))}
        </div>
    </div>
  )
}
