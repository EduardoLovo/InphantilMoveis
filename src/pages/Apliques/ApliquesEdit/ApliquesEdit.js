import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../../../components/Loading/Loading";
import "react-toastify/dist/ReactToastify.css";
import "./ApliquesEdit.css";

export const ApliquesEdit = (props) => {
  const params = useParams();
  const id = params.id;
  const teste = props;
  console.log(teste);

  const navigate = useNavigate();

  const [aplique, setAplique] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      const response = await Api.buildApiGetRequest(Api.readByIdUrl(id), true);
      const results = await response.json();
      setAplique(results);
      setLoading(false);
    };
    loadProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const number = e.target.number.value;
    const img = e.target.img.value;
    const quantidade = e.target.quantidade.value;
    const estoque = e.target.estoque.value;

    console.log(estoque);

    const payload = {
      number,
      img,
      quantidade,
      estoque,
    };

    const response = await Api.buildApiPatchRequest(
      Api.updateUrl(id),
      payload,
      true
    );
    if (response.status === 200) {
      // Product updated successfully
      toast.success("Atualizado com Sucesso!");
      navigate("/apliques-estoque");
    } else {
      // Error
      toast.error("Erro ao atualizar!");
    }
  };

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <div className="contentEdit">
          <div>
            <h1>Editar aplique</h1>
          </div>
          <div className="imagemFormEdit">
            <div>
              <p>{aplique.number}</p>
              <img src={aplique.img} alt="foto do aplique" />
            </div>

            <form className="formApliquesEdit" onSubmit={handleSubmit}>
              <div className="divInput">
                <label className="">Codigo</label>
                <input
                  id="number"
                  name="number"
                  type="text"
                  defaultValue={aplique.number}
                />
              </div>
              <div className="divInput">
                <label>Imagem</label>
                <input
                  id="img"
                  name="img"
                  type="text"
                  defaultValue={aplique.img}
                />
              </div>
              <div className="divInput">
                <label>Quantidade</label>
                <input
                  id="quantidade"
                  name="quantidade"
                  type="number"
                  defaultValue={aplique.quantidade}
                />
              </div>

              <div>
                <label>Estoque: </label>
                <div className="divInput">
                  <select
                    id="estoque"
                    name="estoque"
                    className="form-control"
                    placeholder="estoque"
                  >
                    <option>{aplique.estoque}</option>
                    <option>Sim</option>
                    <option>Nao</option>
                  </select>
                </div>
              </div>
              <div className="divBtnCreateAplique">
                <button className="btnCreateAplique" type="submit">
                  Atualizar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
