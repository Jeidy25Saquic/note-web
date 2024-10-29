// NotaComponent.js
import React, { useState } from 'react';
import './Notes.css';
import Modal from './Modal';

const NotaComponent = ({ content }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <div className="note" onClick={openModal}>
        <p>{content}</p>
      </div>
      {/* Modal solo se muestra si isModalOpen es true */}
      <Modal isOpen={isModalOpen} onClose={closeModal} content={content} />
    </div>
  );
};

export default NotaComponent;
