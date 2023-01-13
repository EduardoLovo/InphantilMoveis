import React from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Api/Api";

export const Create = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const number = e.target.number.value;
    const img = e.target.img.value;
    const quantidade = +e.target.quantidade.value;

    const payload = {
      number: number,
      img: img,
      quantidade: quantidade,
    };

    const response = await Api.buildApiPostRequest(
      Api.addApliquesUrl(),
      payload,
      true
    );
    if (response.status === 200) {
      // Product created successfully
      alert("Tarefa adicionada com sucesso!");
      navigate("/apliques");
    } else {
      // Error
    }
  };
  return (
    <div>
      <div>
        <h1>Adicionar novo aplique</h1>
      </div>
      <button
        onClick={() => {
          navigate("/apliques");
        }}
      >
        Voltar
      </button>
      <form onSubmit={handleSubmit}>
        <label>Numero do aplique: </label>
        <input id="number" name="number" />
        <label>Link da imagem do aplique: </label>
        <input id="img" name="img" />
        <label>Quantidade: </label>
        <input id="quantidade" name="quantidade" />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};
