import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Api } from "../../Api/Api";
import "./View.css";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const View = () => {
  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();

  const [aplique, setAplique] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      const response = await Api.buildApiGetRequest(Api.readByIdUrl(id), true);
      const results = await response.json();
      setAplique(results);
    };

    loadProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e.target.estoque.value);

    const number = e.target.number.value;
    const img = e.target.img.value;
    const quantidade = e.target.quantidade.value;
    const estoque = e.target.estoque.value;

    const payload = {
      number,
      img,
      quantidade,
      estoque
    };

    const response = await Api.buildApiPatchRequest(
      Api.updateUrl(id),
      payload,
      true
    );
    if (response.status === 200) {
      // Product updated successfully
      navigate("/apliques");
    } else {
      // Error
      console.log("Erro ao atualizar");
    }
  };

  const notify = () => toast("Atualizado com sucesso!");

  const deleteAplic = async (e) => {
    e.preventDefault();
    const response = await Api.buildApiDeleteRequest(
      Api.deleteAplicUrl(id),
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
    <div className="">
        <div class="row align-items-center">

          <div class="col d-flex flex-column mb-3 align-items-center">
            <p>{aplique.number}</p>
            <img src={aplique.img} class="w-50 h-auto  p-3" alt='foto do aplique'/>
            <p>Quantidade: {aplique.quantidade}</p>
            <button className="btnBack btnDel" onClick={deleteAplic}>
              Deletar
            </button>
          </div>

          <div class="col">
            <form class="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
              <h3>Editar</h3>
              <div class="input-group mb-3 w-50">
                <span class="input-group-text" id="inputGroup-sizing-default">Nmero</span>
                <input 
                  id="number"
                  name="number"
                  defaultValue={aplique.number} 
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
                  defaultValue={aplique.img} 
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
                defaultValue={aplique.quantidade} 
                type="text" 
                class="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default"/>
              </div>

              <label>Estoque: </label>
              {aplique.estoque} 
              <div class="input-group mb-3 w-50">
                <select id="estoque" name="estoque" class="form-control" s defaultValue={aplique.estoque} placeholder="Estoque">
                  <option >{aplique.estoque}</option>
                  <option>Sim</option>
                  <option>Nao</option>
                </select> 

              </div>
              <button className="btnAtu btnBack" type="submit" onClick={notify}>
                atualizar
              </button>   
            </form>
          </div>

        </div>
    </div>
  );
};
