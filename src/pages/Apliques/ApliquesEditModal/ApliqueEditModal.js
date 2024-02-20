import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export const ApliquesEditModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Meu Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>{/* Conteúdo do modal */}</Modal.Body>
        <Modal.Footer>
          <button onClick={() => setShowModal(false)}>Fechar</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
