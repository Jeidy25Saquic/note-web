// Tablero.js
import React from 'react';
import './Tablero.css';
import NotaComponent from './Notes'; // Importa NotaComponent

function Tablero({ title, notes }) {
  return (
    <div className="tablero">
      <h2>{title}</h2>
      <div className="notas-container">
        {notes.map((note, index) => (
          <NotaComponent key={index} content={note} />
        ))}
      </div>
    </div>
  );
}

export default Tablero;
