import Nav from './components/Nav';
import Horario from './components/Horario';
import Cuerpo from './components/Cuerpo';
import Ubicaciones from './components/Ubicaciones';
import Carrusel from './components/Carrusel';
function App() {
  return (
    <div>
      <Horario/>
      <Nav/>
      <Carrusel/>
      <Cuerpo/>
      <Ubicaciones/>
    </div>
  );
}

export default App;
