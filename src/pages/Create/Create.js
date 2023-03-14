import React from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Api/Api";
import './Create.css'

export const Create = () => {
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const number = e.target.number.value;
    const img = e.target.img.value;
    const quantidade = +e.target.quantidade.value;
    const estoque = e.target.estoque.value;

    const payload = {
      number: number,
      img: img,
      quantidade: quantidade,
      estoque: estoque
    };

    const response = await Api.buildApiPostRequest(
      Api.addApliquesUrl(),
      payload,
      true
    );
    
    if (response.status === 200) {
      // Product created successfully
      alert("Aplique adicionada com sucesso!");
      navigate("/apliques");
    } else {
      // Error
    }
  };
  return (
    <div className="contentCreate">
      <div>
        <h1>Adicionar novo aplique</h1>
      </div>
      <button className="btnBack"
        onClick={() => {
          navigate("/apliques");
        }}
      >
        Voltar
      </button>
      <form onSubmit={handleSubmit} className="formulario formCreate" >
        <label>Numero do aplique: </label>
        <input id="number" name="number" />
        <label>Link da imagem do aplique: </label>
        <input id="img" name="img" />
        <label>Quantidade: </label>
        <input id="quantidade" name="quantidade" />
        <label>Estoque: </label>
        {/* <input id="estoque" name="estoque" /> */}
        <select id="estoque" name="estoque">
          <option>Sim</option>
          <option>Nao</option>
        </select>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};
