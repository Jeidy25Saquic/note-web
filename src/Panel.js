import React from 'react';
import './Panel.css';

const Panel = () => {
  return (
    <div className="container">
      <div className="content">
        {<h1>Contenido</h1>}
      </div>
      <div className="panel">
        {<h1>Elements</h1>}
      </div>
    </div>
  );
};

export default Panel;