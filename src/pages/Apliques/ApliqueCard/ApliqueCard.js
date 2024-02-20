import React, { useState, useEffect, useRef } from "react";
import "./ApliqueCard.css";
import { Link, useNavigate } from "react-router-dom";
import { Api } from "../../../Api/Api";
import { toast } from "react-toastify";
import ModalReact from "../../../components/Modal/ModalReact";

export const ApliqueCard = (props) => {
  const type = localStorage.getItem("user");

  const codigo = props.aplique.number;
  const img = props.aplique.img;
  const id = props.aplique._id;
  const quantidade = props.aplique.quantidade;
  const estoque = props.aplique.estoque;

  console.log(codigo);
  const navigate = useNavigate();

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
    // Chame a função de exclusão real aqui
    e.preventDefault();
    const response = await Api.buildApiDeleteRequest(
      Api.deleteAplicUrl(id),
      true
    );

    if (response.status === 200) {
      // Product updated successfully

      toast.success("Deletado com Sucesso!");
      navigate("/apliques-estoque");
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
      <img
        src={img}
        className="card-img-top"
        alt={codigo}
        title={`${quantidade} em estoque`}
      />
      {type === "adm" ? (
        <div>
          <div className="menuAplique" onClick={toggleMenu} ref={menuRef}>
            ...
          </div>
          {isMenuOpen && (
            <div className="menu">
              <p className="linkquantidade">quantidade: {quantidade}</p>
              <Link
                className="linkedit"
                to={`/editar-aplique/${id}`}
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
      <div className="codigoAplique">{codigo}</div>
    </div>
  );
};
