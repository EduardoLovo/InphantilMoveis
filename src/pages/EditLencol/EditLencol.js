import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Api } from '../../Api/Api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const EditLencol = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const [lencol, setLencol] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      const response = await Api.buildApiGetRequest(Api.readByIdLencolUrl(id), true);
      const results = await response.json();
      setLencol(results);
    };

    loadProduct();
  }, [id]);

  const notify = () => toast("Atualizado com sucesso!");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const number = e.target.number.value;
    const img = e.target.img.value;
    const quantidade = e.target.quantidade.value;
    const tamanho = e.target.tamanho.value;
    const cor = e.target.tamanho.value;

    const payload = {
      number,
      img,
      quantidade,
      tamanho,
      cor
    };

    console.log(payload);

    const response = await Api.buildApiPatchRequest(
      Api.updateLencolUrl(id),
      payload,
      true
    );
    if (response.status === 200) {
      // Product updated successfully
      navigate("/solteiro");
      
    } else {
      // Error
      console.log("Erro ao atualizar");
    }
  };

  const deleteAplic = async (e) => {
    e.preventDefault();
    const response = await Api.buildApiDeleteRequest(
      Api.deleteLencolUrl(id),
      true
    );

    if (response.status === 200) {
      // Product updated successfully
      navigate("/apliques");
    } else {
      // Error
      console.log("Erro ao deletar");
    }
  };


  return (
    <div>
      <div class="row align-items-center">

        <div class="col d-flex flex-column mb-3 align-items-center">
          <p>{lencol.number}</p>
          <img src={lencol.img} class="w-50 h-auto  p-3" alt='foto do aplique'/>
          <p>Quantidade: {lencol.quantidade}</p>
          <button className="btnBack btnDel" onClick={deleteAplic}>
            Deletar
          </button>
        </div>

        <div class="col">
          <form class="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
            <h3>Editar</h3>
            <div class="input-group mb-3 w-50">
              <span class="input-group-text" id="inputGroup-sizing-default">Numero</span>
              <input 
                id="number"
                name="number"
                defaultValue={lencol.number} 
                type="text" 
                class="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div class="input-group mb-3 w-50">
              <span class="input-group-text" id="inputGroup-sizing-default">Imagem</span>
              <input 
                id="img"
                name="img"
                defaultValue={lencol.img} 
                type="text" 
                class="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div class="input-group mb-3 w-50">
              <span class="input-group-text" id="inputGroup-sizing-default">Quantidade</span>
              <input 
              id="quantidade"
              name="quantidade"
              defaultValue={lencol.quantidade} 
              type="text" 
              class="form-control" 
              aria-label="Sizing example input" 
              aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div class="input-group mb-3 w-50">
              <span class="input-group-text" id="inputGroup-sizing-default">Tamanho</span>
              <input 
              id="tamanho"
              name="tamanho"
              defaultValue={lencol.tamanho} 
              type="text" 
              class="form-control" 
              aria-label="Sizing example input" 
              aria-describedby="inputGroup-sizing-default"/>
            </div>

            <label>Cor: </label>
            {lencol.estoque} 
            <div class="input-group mb-3 w-50">
              <select id="cor" name="cor" class="form-control" s defaultValue={lencol.cor} placeholder="cor">
                <option >{lencol.cor}</option>
                <option>Bege</option>
                <option>Azul</option>
                <option>Branco</option>
                <option>Rosa</option>
                <option>Rosa Bebe</option>
              </select> 

            </div>
            <button className="btnAtu btnBack" type="submit" onClick={notify}>
              atualizar
            </button>   
          </form>
        </div>

</div>

    </div>
  )
}
