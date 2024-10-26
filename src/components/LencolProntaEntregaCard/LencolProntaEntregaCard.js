import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../../Api/Api";
import ModalReact from "../../components/Modal/ModalReact";

const LencolProntaEntregaCard = (props) => {
  const navigate = useNavigate();

  const id = props.lencol._id;
  const number = props.lencol.number;
  const cor = props.lencol.cor;
  const estoque = props.lencol.estoque;
  const imagem = props.lencol.img;

  const type = localStorage.getItem("user");

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
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const deleteAplic = () => {
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

      toast.success("Deletado com Sucesso!");
      navigate("/material-estoque");
    } else {
      // Error
      toast.error("Erro ao deletar!");
    }
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card border-dark mb-3">
      <img src={imagem} className="" alt=".." title={number} />
      {type === "adm" ? (
        <div>
          {isMenuOpen && (
            <div className="menu">
              <Link
                className="linkedit"
                to={`/lencol-edit/${id}`}
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
        ""
      )}
      <div className="codigoAplique">
        <p>
          {cor}-{number}
        </p>
        {type === "adm" ? (
          <div>
            <p></p>
            <div className="menuAplique" onClick={toggleMenu} ref={menuRef}>
              ...
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LencolProntaEntregaCard;
