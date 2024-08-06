import React from 'react';
import Modal from 'react-modal';
import './ModalReact.css';
const ModalReact = ({ isOpen, onRequestClose, onConfirm, question }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirmação"
      className="modalReact"
    >
      <div className="divModal">
        <p>{question}</p>
        <div>
          <button onClick={onConfirm}>Sim</button>
          <button onClick={onRequestClose}>Não</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalReact;
