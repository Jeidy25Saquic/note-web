import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, content, title }) => {
  if (!isOpen) return null;

  // Lista de compañeros de ejemplo para mostrar en el modal
  const companions = [
    { name: 'Ana Contreras', completed: true },
    { name: 'Louis T.', completed: false },
    { name: 'Olivia Brown', completed: true },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        
        <div className="modal-header">
          <input 
            className="modal-title" 
            placeholder="Título de la tarea" 
            value={title || ''} 
            onChange={(e) => console.log('Set title:', e.target.value)} 
          />
        </div>

        <div className="modal-body">
          <textarea 
            className="modal-description" 
            placeholder="Descripción de la nota..." 
            defaultValue={content}
          />

          <div className="modal-add-image">
            <button className="add-image-button">
              📷 Agregar Imagen
            </button>
          </div>

          {/* Lista de compañeros de ejemplo */}
          <div className="modal-companions">
            <h3>Team Members</h3>
            {companions.map((comp, index) => (
              <div key={index} className="companion">
                <span className={`status-circle ${comp.completed ? 'green' : 'red'}`}></span>
                <p>{comp.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

