import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./MenuLencol.css"

export const TamanhosLencol = () => {

    const navigate = useNavigate();

    const type = localStorage.getItem("user");


  return (
    <div class="btn-toolbar d-flex justify-content-center menuLencol" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group me-2" role="group" aria-label="First group">
        <button type="button" class="btn btn-secondary" onClick={()=>navigate("/junior")}>junior</button>
        <button type="button" class="btn btn-secondary" onClick={()=>navigate("/sosolteiro")}>Solteiro</button>
        <button type="button" class="btn btn-secondary" onClick={()=>navigate("/solteiro")}>Solteiro / Solteirão</button>
        <button type="button" class="btn btn-secondary" onClick={()=>navigate("/viuva")}>Viuva</button>
        <button type="button" class="btn btn-secondary" onClick={()=>navigate("/casal")}>Casal</button>
        <button type="button" class="btn btn-secondary" onClick={()=>navigate("/queen")}>Queen</button>
        {type === "adm" ? (
         <button type="button" className="btn btn-warning btn-sm"
         onClick={() => {
           navigate('/createlencol')}}
         >Adicionar novo lençol</button>) : ''}
      </div>
    </div>
  )
}
