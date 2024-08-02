import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Api } from '../../../Api/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import ModalReact from '../../../components/Modal/ModalReact';
import './SinteticoEdit.css';

export const SinteticoEdit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const [sintetico, setSintetico] = useState('');

  const loadProduct = async () => {
    const response = await Api.buildApiGetRequest(
      Api.readByIdMaterialUrl(id),
      true
    );
    const results = await response.json();
    setSintetico(results);
  };

  useEffect(() => {
    loadProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const codigo = e.target.codigo.value;
    const img = e.target.img.value;
    const estoque = e.target.estoque.value;
    const cor = e.target.cor.value;

    const payload = {
      codigo,
      cor,
      img,
      estoque,
    };

    const response = await Api.buildApiPatchRequest(
      Api.updateMaterialUrl(id),
      payload,
      true
    );

    if (response.status === 200) {
      // Product updated successfully
      toast.success('Atualizado com Sucesso!');
      navigate('/material-estoque');
    } else {
      // Error
      toast.error('Erro ao atualizar!');
    }
  };

  const deleteAplic = async () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async (e) => {
    e.preventDefault();
    const response = await Api.buildApiDeleteRequest(
      Api.deleteMaterialUrl(id),
      true
    );

    if (response.status === 200) {
      // Product updated successfully
      toast.success('Deletado com Sucesso!');
      navigate('/material-estoque');
    } else {
      // Error
      toast.error('Erro ao deletar!');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="contentSinteticoEdit">
      <div className="text-center m-4">
        <h1>Editar material</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label id="codigo">Codigo</label>
          <input
            id="codigo"
            name="codigo"
            defaultValue={sintetico.codigo}
            type="text"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div>
          <label id="img">Imagem</label>
          <input
            id="img"
            name="img"
            defaultValue={sintetico.img}
            type="text"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div>
          <label>Estoque: </label>
          <select id="estoque" name="estoque" placeholder="Estoque">
            <option>{sintetico.estoque}</option>
            <option>Sim</option>
            <option>Nao</option>
          </select>
        </div>

        <div className="">
          <label>Cor: </label>
          <select id="cor" name="cor" placeholder="Cor">
            <option>{sintetico.cor}</option>
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
            <option>Verde</option>
            <option>Vermelho</option>
            <option>Externo</option>
          </select>
        </div>

        <div>
          <button type="submit">Atualizar</button>
        </div>
      </form>
      <ModalReact
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        question="Certeza que deseja excluir?"
      />
      <div className="botaoDelete">
        <button className=" " onClick={deleteAplic}>
          Deletar
        </button>
      </div>
    </div>
  );
};
