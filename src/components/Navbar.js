import { Link } from "react-router-dom";
import './estilos.css';

function Navbar() {
  return (
    <nav className="nav">
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/">Inicio</Link>
      </li>
      <li className="nav-item">
        <Link to="/menu">Menú</Link>
      </li>
      <li className="nav-item">
        <Link to="/puntos-venta">Puntos de Venta</Link>
      </li>
      <li className="nav-item">
        <Link to="/Contacto">Contacto</Link>
      </li>
    </ul>
  </nav>
  );
}
export default Navbar;