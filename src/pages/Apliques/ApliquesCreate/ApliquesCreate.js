import React from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../../Api/Api";
import { toast } from "react-toastify";
import "./ApliquesCreate.css";

export const ApliquesCreate = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const codigo = e.target.number.value;
    const img = e.target.img.value;
    const quantidade = +e.target.quantidade.value;
    const estoque = e.target.estoque.value;

    const payload = {
      number: codigo,
      img: img,
      quantidade: quantidade,
      estoque: estoque,
    };

    const response = await Api.buildApiPostRequest(
      Api.addApliquesUrl(),
      payload,
      true
    );

    if (response.status === 200) {
      // Product created successfully
      toast.success("Aplique adicionada com sucesso!");
      navigate("/apliques-estoque");
    } else {
      // Error
      toast.error("Erro ao adicionar Aplique!");
    }
  };
  return (
    <div>
      <div className="cabecalho">
        <h1>Adicionar novo aplique</h1>
      </div>
      <div className="contentCreate">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Codigo</label>
            <input id="number" name="number" type="text" />
          </div>
          <div>
            <label>Imagem</label>
            <input id="img" name="img" type="text" />
          </div>
          <div>
            <label>Quantidade</label>
            <input id="quantidade" name="quantidade" type="number" />
          </div>
          <div>
            <label>Estoque</label>
            <div>
              <select id="estoque" name="estoque" placeholder="estoque">
                <option>Sim</option>
                <option>Nao</option>
              </select>
            </div>
          </div>
          <div>
            <button className="botao-primario" type="submit">
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
