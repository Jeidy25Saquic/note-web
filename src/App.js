import './App.css';
import Section from './Section';
import BarraDeFunciones from './BarraDeFunciones';
import Tablero from './Tablero';
import React, { useState } from 'react';

function App() {
  const [tableros, setTableros] = useState([]);

  // Función para agregar un nuevo tablero
  const handleAddTablero = () => {
    const newTablero = { title: `Tablero ${tableros.length + 1}` };
    setTableros([...tableros, newTablero]);
  };

  return (
    <div className="Principal">
      {/* Barra de tareas */}
      <BarraDeFunciones />
      
      {/* Section con el botón para agregar tableros */}
      <Section onAddTablero={handleAddTablero} />

      {/* Renderizado */}
      <div className="tableros-container">
        {tableros.map((tablero, index) => (
          <Tablero key={index} title={tablero.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
