import React from 'react'
import { Api } from '../../Api/Api';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Rosa } from './Rosa';
import { JwtHandler } from '../../jwt_handler/jwt_handler';

export const MaterialCatalogo = () => {
  const navigate = useNavigate();
  const [isLogged] = useState(JwtHandler.isJwtValid);
  const type = localStorage.getItem("user");

  const [materiais, setMateriais] = useState([]);

  const render = (e) => {
    const cor = e.target.id
    console.log(cor);
    if (cor === 'rosa') {
      setMateriais(<Rosa/>)
    } else if (cor === 'junior') {
      setMateriais(<Rosa/>)
    } else if (cor === 'solteiro') {
      setMateriais(<Rosa/>)
    } else if (cor === 'solteiroao') {
      setMateriais(<Rosa/>)
    } else if (cor === 'viuva') {
      setMateriais(<Rosa/>)
    } else if (cor === 'casal') {
      setMateriais(<Rosa/>)
    } else if (cor === 'queen') {
      setMateriais(<Rosa/>)
    }
  }

  return (
    <div className="btn-toolbar  menuLencol" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group me-2" role="group" aria-label="First group">

        <button type="button" className="btn btn-secondary" id='rosa' onClick={render}>Rosa</button>
        <button type="button" className="btn btn-secondary" id='solteiro' onClick={render}>Rosa</button>
        <button type="button" className="btn btn-secondary" id='solteiroao' onClick={render}>Rosa</button>
        
        {isLogged === true ? 
          <div>
            {type === "adm" ? (
             <button type="button" className="btn btn-warning btn-sm"
             onClick={() => {
               navigate('/material-create')}}
             >Adicionar novo material</button>) : ''}
          </div>
          :
          ''}
        </div>
      <div >
        {materiais}
      </div>
    </div>
  )
}
