import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../Api/Api';
import { toast } from 'react-toastify';

export const MaterialCreate = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const codigo = e.target.codigo.value;
    const cor = e.target.cor.value;
    const img = e.target.img.value;
    const estoque = e.target.estoque.value;

    const payload = {
      codigo: codigo,
      cor: cor,
      img: img,
      estoque: estoque,
    };

    console.log(payload);

    const response = await Api.buildApiPostRequest(
      Api.addMaterialUrl(),
      payload,
      true
    );

    if (response.status === 200) {
      // Product created successfully
      toast.success('Aplique adicionada com sucesso!');
      navigate('/material-estoque');
    } else {
      // Error
      toast.error('Erro ao adicionar Aplique!');
    }
  };

  return (
    <div className="contentCreateMaterial">
      <div className="text-center">
        <h1>Adicionar novo material</h1>
      </div>
      <form
        className="d-flex flex-column align-items-center scale"
        onSubmit={handleSubmit}
      >
        <div className="input-group mb-3 w-50 scale">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Codigo
          </span>
          <input
            id="codigo"
            name="codigo"
            type="text"
            className="form-control scale"
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

        <label>Cor: </label>
        <div className="input-group mb-3 w-50">
          <select
            id="cor"
            name="cor"
            className="form-control"
            placeholder="Cor"
          >
            <option></option>
            <option>Amarelo</option>
            <option>Azul</option>
            <option>Bege</option>
            <option>Branco</option>
            <option>Cinza</option>
            <option>Laranja</option>
            <option>Lilas</option>
            <option>Mostarda</option>
            <option>Preto</option>
            <option>Rosa</option>
            <option>Tiffany</option>
            <option>Verde</option>
            <option>Vermelho</option>
            <option>Externo</option>
          </select>
        </div>

        <label>Estoque: </label>
        <div className="input-group mb-3 w-50">
          <select
            id="estoque"
            name="estoque"
            className="form-control"
            placeholder="Estoque"
          >
            <option>Sim</option>
            <option>Nao</option>
          </select>
        </div>

        <button className="btnPadrao" type="submit">
          Adicionar
        </button>
      </form>
    </div>
  );
};
