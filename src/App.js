import './App.css';
import Section from './Section'
import BarraDeFunciones from './BarraDeFunciones'; // Importa la barra de herramientass
import Notes from './Notes';
import Panel from './Panel';
function App() {
  return (
    <div className = "Principal">
      {/* Barra de tareas, colocada sobre los botones existentes */}
      <BarraDeFunciones />
      <Section  />
      
      
      
      
      //Geo
      <Notes></Notes>
    </div>
  );
}



export default App;
