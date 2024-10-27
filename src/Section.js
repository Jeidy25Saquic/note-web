import React, { useState } from 'react';
import './Section.css';

function Section() {
  const [buttonCount, setButtonCount] = useState(3);
  const [selectedButton, setSelectedButton] = useState(null); // Estado para el botón seleccionado
  const [buttonTexts, setButtonTexts] = useState(Array(buttonCount).fill('Editar')); // Estado para los textos de los botones
  const [isEditable, setIsEditable] = useState(Array(buttonCount).fill(true)); // Estado para controlar si el botón es editable

  const handleAddButton = () => {
    setButtonCount(buttonCount + 1);
    setButtonTexts([...buttonTexts, 'Editar']); // Agrega un nuevo botón con el texto "Editar"
    setIsEditable([...isEditable, true]); // Hace el nuevo botón editable
  };

  const handleButtonClick = (index) => {
    // Solo permite editar si el botón aún es editable
    if (isEditable[index]) {
      setSelectedButton(index);
    }
  };

  const handleTextChange = (index, newText) => {
    const updatedTexts = [...buttonTexts];
    updatedTexts[index] = newText;
    setButtonTexts(updatedTexts);
  };

  const handleBlur = (index) => {
    // Cuando el usuario termina de editar, marca el botón como no editable
    const updatedEditable = [...isEditable];
    updatedEditable[index] = false;
    setIsEditable(updatedEditable);
    setSelectedButton(null); // Sale del modo edición
  };

  return (
    <div className="Secciones">
      <div className="button-container">
        {Array.from({ length: buttonCount }, (_, index) => (
          <div key={index} className="button-wrapper">
            {selectedButton === index && isEditable[index] ? (
              <input
                type="text"
                value={buttonTexts[index]}
                onChange={(e) => handleTextChange(index, e.target.value)}
                onBlur={() => handleBlur(index)} // Marca el botón como no editable al perder el foco
                className="button-input"
              />
            ) : (
              <button
                onClick={() => handleButtonClick(index)}
                className={`BotonesCursos button-${index}`}
              >
                {buttonTexts[index]}
              </button>
            )}
          </div>
        ))}
        <button className="BotonesCursos" onClick={handleAddButton}>+</button>
      </div>
    </div>
  );
}

export default Section;