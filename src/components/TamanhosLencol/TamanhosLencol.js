import React from 'react'
import { useNavigate } from 'react-router-dom';

export const TamanhosLencol = () => {

    const navigate = useNavigate();

  return (
    <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-info m-2" onClick={()=>navigate("/junior")}>Junior</button>
        <button type="button" class="btn btn-info m-2" onClick={()=>navigate("/solteiro")}>Solteiro / Solteirão</button>
        <button type="button" class="btn btn-info m-2" onClick={()=>navigate("/viuva")}>Viuva</button>
        <button type="button" class="btn btn-info m-2" onClick={()=>navigate("/casal")}>Casal</button>
    </div>
  )
}
