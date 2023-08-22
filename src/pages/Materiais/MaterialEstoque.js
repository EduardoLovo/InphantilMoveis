import React from 'react'
import { Api } from '../../Api/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const MaterialEstoque = () => {
    const [materiais, setMateriais] = useState([]);

    const loadData = async () => {
    const response = await Api.buildApiGetRequest(Api.readAllMaterialUrl());
    const results = await response.json();
        
    setMateriais(results);
  };
    useEffect(() => {
        loadData();
    }, []);

  return (
    <div>
        <Link to='/material-create'><button>Adicionar novo material</button></Link>

        {materiais.map((material, id) => (
            <div key={id} className='card'>
                
                <img src={material.img} alt='imagem do material'/>
                
                <div>
                    <p>{material.codigo}</p>
                    <Link to={`/material-edit/${material._id}/`} teste='testea'>
                        <button className='m-1 p-1' >Editar</button>
                    </Link>
                </div>
            </div>
        ))}
    </div>
  )
}
