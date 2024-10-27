// App.js
import './App.css';
import Section from './Section';
import BarraDeFunciones from './BarraDeFunciones';
import Tablero from './Tablero'; // Importa el componente de tablero

import React, { useState } from 'react';

function App() {
  const [tableros, setTableros] = useState([]); // Estado para manejar los tableros

  const handleAddTablero = () => {
    const newTablero = { title: `Tablero ${tableros.length + 1}` };
    setTableros([...tableros, newTablero]);
  };

  return (
    <div className="Principal">
      <BarraDeFunciones onAddTablero={handleAddTablero} /> {/* Pasa la función al componente */}
      <Section />
      <div className="tablero-container">
        {tableros.map((tablero, index) => (
          <Tablero key={index} title={tablero.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
