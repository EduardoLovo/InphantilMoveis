import React, { useState } from "react";
import "./Teste.css";
import ModalReact from "../../components/Modal/ModalReact";

export const Teste = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    // Chame a função de exclusão real aqui
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="teste">
      <div>
        <button onClick={handleDeleteClick}>Excluir</button>
        <ModalReact
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
        />
      </div>
    </div>
  );
};
