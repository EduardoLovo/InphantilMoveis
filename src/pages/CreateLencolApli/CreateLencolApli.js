import React from 'react'
import { Api } from '../../Api/Api';
import { useNavigate } from 'react-router-dom';

export const CreateLencolApli = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const number = e.target.number.value;
        const img = e.target.img.value;
        const quantidade = e.target.quantidade.value;
        const tamanho = e.target.tamanho.value;
        const cor = e.target.cor.value;

        const payload = {
        number,
        img,
        quantidade,
        tamanho,
        cor
        };

        const response = await Api.buildApiPostRequest(
            Api.addLencolUrl(),
            payload,
            true
        );
        
        if (response.status === 200) {
            // Product created successfully
            alert("Lençol adicionado com sucesso!");
            navigate("/solteiro");
        } else {
            // Error
        }
    }

  return (
    <div>
        <h1>adionar novo lençol</h1>
        <div className="row align-items-center">

        <div className="col">
          <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
            <h3>Editar</h3>
            <div className="input-group mb-3 w-50">
              <span className="input-group-text" id="inputGroup-sizing-default">Numero</span>
              <input 
                id="number"
                name="number"
                type="text" 
                className="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3 w-50">
              <span className="input-group-text" id="inputGroup-sizing-default">Imagem</span>
              <input 
                id="img"
                name="img"
                type="text" 
                className="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3 w-50">
              <span className="input-group-text" id="inputGroup-sizing-default">Quantidade</span>
              <input 
              id="quantidade"
              name="quantidade"
              type="text" 
              className="form-control" 
              aria-label="Sizing example input" 
              aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3 w-50">
              <span className="input-group-text" id="inputGroup-sizing-default">Tamanho</span>
              <input 
              id="tamanho"
              name="tamanho"
              type="text" 
              className="form-control" 
              aria-label="Sizing example input" 
              aria-describedby="inputGroup-sizing-default"/>
            </div>

            <label>Cor: </label>
            <div className="input-group mb-3 w-50">
              <select id="cor" name="cor" className="form-control"  placeholder="cor">
                <option ></option>
                <option>Bege</option>
                <option>Azul</option>
                <option>Branco</option>
                <option>Rosa</option>
                <option>Rosa Bebe</option>
                <option>Palha</option>
                <option>Cinza</option>
                <option>Prata</option>
              </select> 

            </div>
            <button className="btnAtu btnBack" type="submit" >
              Adicionar
            </button>   
          </form>
        </div>

</div>
      
    </div>
  )
}
