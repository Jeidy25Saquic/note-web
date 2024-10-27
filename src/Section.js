// Section.js
import React from 'react';
import './Section.css';

function Section({ tableros, onAddTablero, onSelectTablero }) {
  return (
    <div className="Secciones">
      <div className="button-container">
        {tableros.map((tablero) => (
          <button
            key={tablero.id}
            onClick={() => onSelectTablero(tablero.id)}
            className={`BotonesCursos button-${tablero.id}`}
          >
            {tablero.title}
          </button>
        ))}
        <button className="BotonesCursos" onClick={onAddTablero}>+</button>
      </div>
    </div>
  );
}

export default Section;
