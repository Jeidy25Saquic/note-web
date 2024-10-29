<<<<<<< Updated upstream
import React, { useState } from 'react';

function Modal({ task, onClose }) {
  const [email, setEmail] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSendReminder = () => {
    // Simula el envío de recordatorio
    if (email) {
      setConfirmationMessage(`Recordatorio programado para ${email} con el título: "${task.title}".`);
      setEmail('');
    } else {
      alert('Por favor, ingresa un correo electrónico válido.');
    }
  };

  return (
    <div className="modal">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <input 
        type="email" 
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button onClick={handleSendReminder}>Recordar por correo</button>
      <button onClick={onClose}>Cerrar</button>
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
}
=======
// Modal.js
// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <div className="modal-body">
          <h2>Detalles de la Nota</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
>>>>>>> Stashed changes

export default Modal;
