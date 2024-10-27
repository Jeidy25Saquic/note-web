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

export default Modal;
