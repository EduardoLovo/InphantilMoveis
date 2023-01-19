import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Api } from "../../Api/Api";
import "./View.css";

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
  }, []);

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

  const notify = () => alert("Aplique atualizado com sucesso!");

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
    <div className="contentCal">
      <div>
        {/* <button
          className="btnBack"
          onClick={() => {
            navigate("/apliques");
          }}
        >
          Voltar
        </button> */}
      </div>
      <div className="viewAplicForm">
        <div className="viewAplic">
          <h1>{aplique.number}</h1>
          <img src={aplique.img} />
          <p>Quantidade: {aplique.quantidade}</p>
          <button className="btnBack btnDel" onClick={deleteAplic}>
            Deletar
          </button>
        </div>
        <form className="formulario" onSubmit={handleSubmit}>
          <label>numero:</label>
          <input
            id="number"
            name="number"
            defaultValue={aplique.number}
            placeholder="Numero do aplique"
          />
          <label>imagem:</label>
          <input
            id="img"
            name="img"
            defaultValue={aplique.img}
            placeholder="Imagem do aplique"
          />
          <label>quantidade:</label>
          <input
            id="quantidade"
            name="quantidade"
            defaultValue={aplique.quantidade}
            placeholder="Quantidade"
          />

          <label>Estoque: </label>
          {aplique.estoque} 
          <select id="estoque" name="estoque" defaultValue={aplique.estoque} placeholder="Estoque">
            <option>...</option>
            <option>Sim</option>
            <option>Nao</option>
          </select> 

          <button className="btnAtu btnBack" type="submit" onClick={notify}>
            atualizar
          </button>

        </form>
      </div>

      <div>
        <button
          className="btnBack"
          onClick={() => {
            navigate("/apliques");
          }}
        >
          Voltar
        </button>
      </div>
    </div>
  );
};
