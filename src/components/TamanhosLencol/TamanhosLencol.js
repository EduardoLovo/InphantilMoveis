import React from 'react'
import { useNavigate } from 'react-router-dom';

export const TamanhosLencol = () => {

    const navigate = useNavigate();

    const type = localStorage.getItem("user");


  return (
    // <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
    //   <input onClick={()=>navigate("/junior")} type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
    //   <label class="btn btn-outline-primary" for="btnradio1">Junior</label>
    //   <input onClick={()=>navigate("/solteiro")} type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
    //   <label class="btn btn-outline-primary" for="btnradio2">Solteiro / Solteirão</label>

    //   <input onClick={()=>navigate("/viuva")} type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
    //   <label class="btn btn-outline-primary" for="btnradio3">Viuva</label>
    //     {/* <button className='menu-lecol'  onClick={()=>navigate("/junior")}> Junior</button>
    //     <span className='menu-lecol'  onClick={()=>navigate("/solteiro")}>Solteiro / Solteirão</span>
    //     <span className='menu-lecol'  onClick={()=>navigate("/viuva")}>Viuva</span>
    //     <span className='menu-lecol'  onClick={()=>navigate("/casal")}>Casal</span> */}
    //     {type === "adm" ? (
    //     <button type="button" className="btn btn-success btn-sm"
    //     onClick={() => {
    //       navigate('/createlencol')}}
    //     >Adicionar novo lençol</button>) : ''}
    // </div>

    <div class="btn-toolbar d-flex justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
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
