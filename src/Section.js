import React, { useState } from 'react';
import './Section.css';

function Section() {
    const [buttonCount, setButtonCount] = useState(3);
    const [selectedButton, setSelectedButton] = useState(null); // Estado para el botón seleccionado
  
    const handleAddButton = () => {
      setButtonCount(buttonCount + 1);
    };
  
    const handleButtonClick = (index) => {
      setSelectedButton(index); // Cambia el botón seleccionado
    };
  
    return (
      <div className="Secciones">
        <div className="button-container">
          {Array.from({ length: buttonCount }, (_, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`BotonesCursos button-${index} ${selectedButton === index ? 'active' : ''}`} // Agrega la clase 'active' si es el botón seleccionado
            >
              Botón {index + 1}
            </button>
          ))}
          <button className="BotonesCursos" onClick={handleAddButton}>+</button>
        </div>
      </div>
    );
  }

export default Section;