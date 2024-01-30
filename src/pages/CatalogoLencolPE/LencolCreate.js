import React from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Api/Api";
import { toast } from "react-toastify";

export const LencolCreate = () => {
  const navigate = useNavigate();

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

    const response = await Api.buildApiPostRequest(
      Api.addLencolUrl(),
      payload,
      true
    );

    if (response.status === 200) {
      // Product created successfully
      toast.success("Lençol adicionado com sucesso!");
      navigate("/catalogo-lencol-pronta-entrega");
    } else {
      // Error
    }
  };

  return (
    <div>
      <h1>adionar novo lençol</h1>
      <div className="row align-items-center">
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
              <select
                id="tamanho"
                name="tamanho"
                className="form-control"
                placeholder="tamanho"
              >
                <option></option>
                <option>Junior</option>
                <option>Solteiro</option>
                <option>Solteiro / Solteirão</option>
                <option>Viuva</option>
                <option>Casal</option>
                <option>Queen</option>
                <option>King</option>
              </select>
            </div>

            <div className="input-group mb-3 w-50">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Cor
              </span>
              <select
                id="cor"
                name="cor"
                className="form-control"
                placeholder="cor"
              >
                <option></option>
                <option>Bege</option>
                <option>Azul</option>
                <option>Branco</option>
                <option>Rosa</option>
                <option>Rosa Bebe</option>
                <option>Palha</option>
                <option>Cinza</option>
                <option>Prata</option>
              </select>
            </div>

            <button className="btnPadrao" type="submit">
              Adicionar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
