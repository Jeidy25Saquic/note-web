import React, { useState } from 'react';
import './Section.css';

function Section({ tableros, onAddTablero, onSelectTablero }) {
  const [editedText, setEditedText] = useState({});
  const [isEditing, setIsEditing] = useState({});
  const [activeTablero, setActiveTablero] = useState(null); // Estado para el botón activo

  const handleTextChange = (e, id) => {
    setEditedText({ ...editedText, [id]: e.target.value });
  };

  const handleBlur = (id) => {
    setIsEditing({ ...isEditing, [id]: false });
  };

  const startEditing = (id) => {
    if (!isEditing[id]) {
      setIsEditing({ ...isEditing, [id]: true });
      if (editedText[id] === undefined) {
        setEditedText({ ...editedText, [id]: '' });
      }
    }
  };

  const handleClick = (id) => {
    setActiveTablero(id);
    onSelectTablero(id);
  };

  return (
    <div className="Secciones">
      <div className="button-container">
        {tableros.map((tablero) => (
          <button
            key={tablero.id}
            onClick={() => {
              if (!isEditing[tablero.id]) {
                handleClick(tablero.id);
              }
            }}
            className={`BotonesCursos button-${tablero.id} ${isEditing[tablero.id] ? 'editing' : ''} ${activeTablero === tablero.id ? 'active' : ''}`}
            onDoubleClick={() => startEditing(tablero.id)}
          >
            {isEditing[tablero.id] ? (
              <input
                type="text"
                value={editedText[tablero.id] ?? tablero.title}
                onChange={(e) => handleTextChange(e, tablero.id)}
                onBlur={() => handleBlur(tablero.id)}
                autoFocus
                className="edit-input"
              />
            ) : (
              editedText[tablero.id] ?? tablero.title
            )}
          </button>
        ))}
        <button className="BotonesCursos" onClick={onAddTablero}>+</button>
      </div>
    </div>
  );
}

export default Section;