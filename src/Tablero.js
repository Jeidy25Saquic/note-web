// Tablero.js
import React from 'react';
import './Tablero.css';
import NotaComponent from './Notes'; // Importa NotaComponent

function Tablero({ title, notes }) {
  return (
    <div className="tablero">
      <h3>{title}</h3>
      <div className="notes-container">
        {notes.map((note, index) => (
          <NotaComponent key={index} content={note} /> // Renderiza NotaComponent para cada nota
        ))}
      </div>
    </div>
  );
}

export default Tablero;
