import React from "react";
import "./BarraDeFunciones.css";

function BarraDeFunciones({ onAddNote }) {
  return (
    <div className="barra-de-funciones">
      <div className="calendario">
        <div className="calendario-header">Octubre 2024</div>
        <div className="calendario-dias">
          <div>Dom</div>
          <div>Lun</div>
          <div>Mar</div>
          <div>Mié</div>
          <div>Jue</div>
          <div>Vie</div>
          <div>Sáb</div>
        </div>
        <div className="calendario-fechas">
          {Array.from({ length: 31 }, (_, i) => (
            <div key={i} className="calendario-dia">{i + 1}</div>
          ))}
        </div>
      </div>
      <button className="boton-funcion">FOCUS
        <br />
        SESION
      </button>
      <button className="boton-funcion" onClick={onAddNote}>
        AGREGAR
        <br />
        TAREA
      </button>
    </div>
  );
}

export default BarraDeFunciones;