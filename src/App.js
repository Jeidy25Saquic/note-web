import './App.css';
import Section from './Section'
import BarraDeFunciones from './BarraDeFunciones';
import Notes from './Notes';

function App() {
  return (
    <div className = "Principal">
      {/* Barra de tareas, colocada sobre los botones existentes */}
      <BarraDeFunciones />
      <Section  />
      <Notes></Notes>
    </div>
  );
}



export default App;
