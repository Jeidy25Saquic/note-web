
import './App.css';
import Sidebar from './Sidebar';
import TaskCard from './TaskCard';
import Modal from './Modal';

import React, { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTask = () => {
    const newTask = { title: 'Nueva Tarea', description: 'Descripción de ejemplo', students: ['Estudiante 1'] };
    setTasks([...tasks, newTask]);
  };

  const handleOpenModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  return (
    <div className="App">
      <Sidebar onAddTask={handleAddTask} />
      <div className="board">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} onClick={handleOpenModal} />
        ))}
      </div>
      {isModalOpen && <Modal task={selectedTask} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
