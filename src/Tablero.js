import React from 'react';
import './Tablero.css';

function Tablero({ title, notes }) {
  return (
    <div className="tablero">
      <h3>{title}</h3>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tablero;