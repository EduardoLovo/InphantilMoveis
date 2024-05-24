import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Api } from "../../../Api/Api";
import { toast } from "react-toastify";
import ModalReact from "../../../components/Modal/ModalReact";
import "./TecidosEdit.css";

export const TecidosEdit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const sucesso = () => toast.success("Atualizado com Sucesso!");
  const erro = () => toast.error("Erro ao atualizar!");

  const [tecido, setTecido] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByIdTecidoUrl(id),
        true
      );
      const results = await response.json();
      setTecido(results);
    };

    loadProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const img = e.target.img.value;
    const quantidade = +e.target.quantidade.value;
    const tamanho = e.target.tamanho.value;
    const cor = e.target.cor.value;
    const estoque = e.target.estoque.value;

    const payload = {
      img,
      quantidade,
      tamanho,
      cor,
      estoque,
    };

    const response = await Api.buildApiPatchRequest(
      Api.updateTecidoUrl(id),
      payload,
      true
    );
    if (response.status === 200) {
      // Product updated successfully
      sucesso();
      navigate("/tecidos");
    } else {
      // Error
      erro();
    }
  };

  const handleConfirmDelete = async (e) => {
    e.preventDefault();
    const response = await Api.buildApiDeleteRequest(
      Api.deleteTecidoUrl(id),
      true
    );

    if (response.status === 200) {
      // Product updated successfully
      navigate("/tecidos");
    } else {
      // Error
      console.log("Erro ao deletar");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="contentTecidoEdit">
      <h1>Editar Tecido</h1>
      <div className="divEditTecido">
        <img
          src={tecido.img}
          alt="imagem tecido"
          className="imagemTecidoEdit"
        />
        <form className="formularioEditTecido" onSubmit={handleSubmit}>
          <div className="divInput">
            <label className="" id="inputGroup-sizing-default">
              Imagem
            </label>
            <input
              id="img"
              name="img"
              defaultValue={tecido.img}
              type="text"
              className=""
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <div className="divInput">
            <label className="" id="inputGroup-sizing-default">
              Quantidade
            </label>
            <input
              id="quantidade"
              name="quantidade"
              defaultValue={tecido.quantidade}
              type="text"
              className=""
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <div className="divInput">
            <label>Cor: </label>
            <select id="cor" name="cor" className="" placeholder="cor">
              <option>{tecido.cor}</option>
              <option>Azul</option>
              <option>Azul AZ3</option>
              <option>Azul Claro</option>
              <option>Bege</option>
              <option>Branco</option>
              <option>Cinza</option>
              <option>Palha</option>
              <option>Prata</option>
              <option>Rosa</option>
              <option>Rosa Bebe</option>
              <option>Verde</option>
            </select>
          </div>

          <div className="divInput">
            <label>Tamanho: </label>
            <select id="tamanho" name="tamanho" className="" placeholder="cor">
              <option>{tecido.tamanho}</option>
              <option>Junior - M</option>
              <option>Solteiro / Solteirão - G</option>
              <option>Viuva - GG</option>
              <option>Casal</option>
              <option>BQK</option>
            </select>
          </div>

          <label>Estoque: </label>
          <div className="">
            <select
              id="estoque"
              name="estoque"
              className=""
              placeholder="estoque"
            >
              <option>{tecido.estoque}</option>
              <option>Sim</option>
              <option>Nao</option>
            </select>
          </div>

          <button className=" btnPadrao m-4" type="submit">
            Atualizar
          </button>
        </form>
      </div>
      <div className="text-center m-4">
        <ModalReact
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
          question="Certeza que deseja excluir?"
        />
      </div>
    </div>
  );
};
