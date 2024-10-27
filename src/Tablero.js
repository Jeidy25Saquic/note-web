import React, { useState } from 'react';
import './Tablero.css';
function Tablero({ title }) {
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    const newNote = { title: 'Nueva Nota', description: 'Descripción de la nota' };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="tablero">
      <h2>{title}</h2>
      <button onClick={handleAddNote}>Agregar Nota</button>
      <div className="notas-list">
        {notes.map((note, index) => (
          <div key={index} className="nota">
            <h3>{note.title}</h3>
            <p>{note.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tablero;