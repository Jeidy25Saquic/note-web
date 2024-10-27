import React from 'react';
import './Sidebar.css';


function Sidebar({ onAddTask }) {
  return (
    <div className="sidebar">
      <button onClick={onAddTask} className="add-task-btn">Agregar Tarea</button>
    </div>
  );
}

export default Sidebar;
