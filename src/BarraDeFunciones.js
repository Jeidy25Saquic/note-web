// BarraDeFunciones.js
import React from 'react';
import './BarraDeFunciones.css';

function BarraDeFunciones({ onAddTablero }) { // Recibe la función como prop
  return (
    <div className="barra-de-funciones">
      <button className="boton-funcion">Archivo</button>
      <button className="boton-funcion">Redimensionar</button>
      <button className="boton-funcion">Editar</button>
      <button className="boton-funcion">H</button>
      <button className="boton-funcion">+</button>
      <button className="boton-funcion">Estadísticas</button>
      <button className="boton-funcion">Comentarios</button>
      <button className="boton-funcion">Presentar</button>
      <button className="boton-funcion" onClick={onAddTablero}>AGREGAR<br/>TAREA</button>
    </div>
  );
}

export default BarraDeFunciones;
