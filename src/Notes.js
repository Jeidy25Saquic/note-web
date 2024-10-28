// NotaComponent.js
import React from 'react';
import './Notes.css'; // Archivo de estilos para NotaComponent

const NotaComponent = ({ content }) => (
  <div className="note">
    <p>{content}</p>
  </div>
);

export default NotaComponent;