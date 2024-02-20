import React from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../../Api/Api";
import { toast } from "react-toastify";
import { Loading } from "../../../components/Loading/Loading";
import { useState } from "react";
import { useEffect } from "react";
import "./ApliquesCreate.css";

export const ApliquesCreate = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // const [estoque, setEstoque] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const codigo = e.target.codigo.value;
    const imagem = e.target.imagem.value;
    const quantidade = +e.target.quantidade.value;
    var estoque = e.target.estoque.value;
    if (estoque === "true") {
      estoque = true;
    } else {
      estoque = false;
    }

    const payload = {
      number: codigo,
      imagem: imagem,
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
    <div className="contentCreate">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="">
            <h1>Adicionar novo aplique</h1>
          </div>
          <form className="formApliquesCreate" onSubmit={handleSubmit}>
            <div className="divInput">
              <label className="">Codigo</label>
              <input id="codigo" name="codigo" type="text" className="" />
            </div>
            <div className="divInput">
              <label>Imagem</label>
              <input id="imagem" name="imagem" type="text" />
            </div>
            <div className="divInput">
              <label>Quantidade</label>
              <input id="quantidade" name="quantidade" type="number" />
            </div>

            <div>
              <label>Estoque: </label>
              <div className="apliqueCreateInputRadio">
                <input type="radio" id="estoque" name="estoque" value={true} />
                <label for="html">SIM</label>
                <input type="radio" id="estoque" name="estoque" value={false} />
                <label for="css">NÃO</label>
              </div>
            </div>
            <div className="divBtnCreateAplique">
              <button className="btnCreateAplique" type="submit">
                Adicionar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
