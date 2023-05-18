
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Menu from './components/Menu';
import PuntosVenta from'./components/PuntosVenta';
import Contacto from './components/Contacto';
import Ubicaciones from './components/Ubicaciones';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from 'react-router-dom';
import Horario from './components/Horario';



function App() {
  return (
    <Router>
      <Horario />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/menu' element={<Menu/>}/>
        <Route exact path='/puntos-venta' element={<PuntosVenta/>}/>
        <Route exact path='/Contacto' element={<Contacto/>}/>
      </Routes>
    <Ubicaciones/>
    </Router>
  );
}

export default App;
