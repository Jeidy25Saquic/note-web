import React, { useState } from 'react';
import './Section.css';

function Section({ onAddTablero }) {
  const [buttonCount, setButtonCount] = useState(3);
  const [selectedButton, setSelectedButton] = useState(null);
  const [buttonTexts, setButtonTexts] = useState(Array(buttonCount).fill('Editar'));
  const [isEditable, setIsEditable] = useState(Array(buttonCount).fill(true));

  const handleAddButton = () => {
    // Llama a la función de App para agregar un nuevo tablero
    onAddTablero();

    // Agrega un nuevo botón en la interfaz de Section
    setButtonCount(buttonCount + 1);
    setButtonTexts([...buttonTexts, 'Editar']);
    setIsEditable([...isEditable, true]);
  };

  const handleButtonClick = (index) => {
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
    const updatedEditable = [...isEditable];
    updatedEditable[index] = false;
    setIsEditable(updatedEditable);
    setSelectedButton(null);
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
                onBlur={() => handleBlur(index)}
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
