import React from 'react';
import ReactModal from 'react-modal';

const HeadedModal = ({ isOpen, closeModal, title, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal Menu"
      style={{ content: { paddingTop: '40px' } }}
    >
      <header className="modal-heading">
        <span onClick={closeModal} className="close">
          &times;
        </span>
        <h2>{title}</h2>
      </header>
      {children}
    </ReactModal>
  );
};

export default HeadedModal;
