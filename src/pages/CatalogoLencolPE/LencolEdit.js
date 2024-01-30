import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../../Api/Api";
import ModalReact from "../../components/Modal/ModalReact";

export const LencolEdit = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const [lencol, setLencol] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByIdLencolUrl(id),
        true
      );
      const results = await response.json();
      setLencol(results);
    };

    loadProduct();
  }, [id]);

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
      cor,
    };

    const response = await Api.buildApiPatchRequest(
      Api.updateLencolUrl(id),
      payload,
      true
    );
    if (response.status === 200) {
      // Product updated successfully
      toast.success("Lençol atualizado com sucesso!");
      navigate("/catalogo-lencol-pronta-entrega");
    } else {
      // Error
      console.log("Erro ao atualizar");
    }
  };

  const deleteAplic = async () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async (e) => {
    e.preventDefault();
    const response = await Api.buildApiDeleteRequest(
      Api.deleteLencolUrl(id),
      true
    );

    if (response.status === 200) {
      // Product updated successfully
      toast.success("Lençol excluido com sucesso!");
      navigate("/catalogo-lencol-pronta-entrega");
    } else {
      // Error
      console.log("Erro ao deletar");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="row align-items-center">
        <div className="col d-flex flex-column mb-3 align-items-center">
          <p>{lencol.number}</p>
          <img
            src={lencol.img}
            className="w-50 h-auto  p-3"
            alt="foto do aplique"
          />
          <p>Quantidade: {lencol.quantidade}</p>
          <ModalReact
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            onConfirm={handleConfirmDelete}
            question="Certeza que deseja excluir?"
          />
          <button className="btnPadrao" onClick={deleteAplic}>
            Deletar
          </button>
        </div>

        <div className="col">
          <form
            className="d-flex flex-column align-items-center"
            onSubmit={handleSubmit}
          >
            <h3>Editar</h3>
            <div className="input-group mb-3 w-50">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Numero
              </span>
              <input
                id="number"
                name="number"
                defaultValue={lencol.number}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div className="input-group mb-3 w-50">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Imagem
              </span>
              <input
                id="img"
                name="img"
                defaultValue={lencol.img}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div className="input-group mb-3 w-50">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Quantidade
              </span>
              <input
                id="quantidade"
                name="quantidade"
                defaultValue={lencol.quantidade}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div className="input-group mb-3 w-50">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Tamanho
              </span>
              <input
                id="tamanho"
                name="tamanho"
                defaultValue={lencol.tamanho}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>

            <label>Cor: </label>
            {lencol.estoque}
            <div className="input-group mb-3 w-50">
              <select
                id="cor"
                name="cor"
                className="form-control"
                s
                defaultValue={lencol.cor}
                placeholder="cor"
              >
                <option>{lencol.cor}</option>
                <option>Bege</option>
                <option>Azul</option>
                <option>Branco</option>
                <option>Rosa</option>
                <option>Rosa Bebe</option>
                <option>Cinza</option>
                <option>Prata</option>
              </select>
            </div>
            <button className="btnPadrao" type="submit">
              Atualizar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
