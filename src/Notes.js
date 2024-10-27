import React, { useState } from "react";
import "./Notes.css";

const Notes = () => {
  const [numberOfNotes] = useState(4);

  return (
    <div className="Nota">
      <h1 id="Titulo1">
        <ul>
          {Array.from({ length: numberOfNotes }, (_, index) => (
            <li key={index}>Nota {index + 1}</li>
          ))}
        </ul>
      </h1>
    </div>
  );
};

export default Notes;