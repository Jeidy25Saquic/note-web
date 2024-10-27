import './App.css';
import Section from './Section';
import BarraDeFunciones from './BarraDeFunciones';
import Tablero from './Tablero';

import React, { useState } from 'react';

function App() {
  const [tableros, setTableros] = useState([]);
  const [selectedTablero, setSelectedTablero] = useState(null); // Tablero seleccionado

  const handleAddTablero = () => {
    const newTablero = { id: tableros.length, title: `Tablero ${tableros.length + 1}`, notes: [] };
    setTableros([...tableros, newTablero]);
  };

  const handleAddNote = () => {
    if (selectedTablero !== null) {
      setTableros((prevTableros) =>
        prevTableros.map((tablero) =>
          tablero.id === selectedTablero
            ? { ...tablero, notes: [...tablero.notes, `Nota ${tablero.notes.length + 1}`] }
            : tablero
        )
      );
    }
  };

  const handleSelectTablero = (id) => {
    setSelectedTablero(id); // Establece el tablero seleccionado
  };

  return (
    <div className="Principal">
      <BarraDeFunciones onAddNote={handleAddNote} />
      <Section
        tableros={tableros}
        onAddTablero={handleAddTablero}
        onSelectTablero={handleSelectTablero}
      />
      <div className="tablero-container">
        {tableros
          .filter((tablero) => tablero.id === selectedTablero)
          .map((tablero) => (
            <Tablero key={tablero.id} title={tablero.title} notes={tablero.notes} />
          ))}
      </div>
    </div>
  );
}

export default App;
