import React from 'react';
import './TaskCard.css';



function TaskCard({ task, onClick }) {
  return (
    <div className="task-card" onClick={() => onClick(task)}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <ul>
        {task.students.map((student, index) => <li key={index}>{student}</li>)}
      </ul>
    </div>
  );
}

export default TaskCard;

