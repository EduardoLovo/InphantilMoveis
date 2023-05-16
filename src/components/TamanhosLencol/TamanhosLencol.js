import React from 'react'
import { useNavigate } from 'react-router-dom';

export const TamanhosLencol = () => {

    const navigate = useNavigate();

  return (
    <div class="d-flex justify-content-center">
        <span className='menu-lecol'  onClick={()=>navigate("/junior")}> Junior</span>
        <span className='menu-lecol'  onClick={()=>navigate("/solteiro")}>Solteiro / Solteirão</span>
        <span className='menu-lecol'  onClick={()=>navigate("/viuva")}>Viuva</span>
        <span className='menu-lecol'  onClick={()=>navigate("/casal")}>Casal</span>
    </div>
  )
}
