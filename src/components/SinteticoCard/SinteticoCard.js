import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ModalReact from '../../components/Modal/ModalReact';
import { toast } from 'react-toastify';
import { Api } from '../../Api/Api';
// import '../TecidosParaLencol/TecidoCard/TecidoCard.css';

const SinteticoCard = (props) => {
  const navigate = useNavigate();

  const id = props.sintetico._id;
  const codigo = props.sintetico.codigo;
  const cor = props.sintetico.cor;
  const estoque = props.sintetico.estoque;
  const imagem = props.sintetico.img;

  const type = localStorage.getItem('user');

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const deleteAplic = () => {
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
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card border-dark mb-3">
      <img
        src={imagem}
        className="ImgTecidoEstoque cursorPointer"
        alt=".."
        title={codigo}
      />
      {type === 'adm' ? (
        <div>
          {isMenuOpen && (
            <div className="menu">
              <Link
                className="linkedit"
                to={`/editar-sintetico/${id}`}
                estoque={estoque}
              >
                Editar
              </Link>
              <p className="linkdelete" onClick={deleteAplic}>
                Excluir
              </p>
            </div>
          )}
          <ModalReact
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            onConfirm={handleConfirmDelete}
            question="Certeza que deseja excluir?"
          />
        </div>
      ) : (
        ''
      )}
      <div className="codigoAplique">
        <p>
          {cor}-{codigo}
        </p>
        {type === 'adm' ? (
          <div>
            {estoque === 'Nao' ? (
              <div className="estoqueApliqueVermelho"></div>
            ) : (
              <div className="estoqueApliqueVerde"></div>
            )}
            <p></p>
            <div className="menuAplique" onClick={toggleMenu} ref={menuRef}>
              ...
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default SinteticoCard;
