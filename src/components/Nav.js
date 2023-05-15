import React from 'react';
import './estilos.css';
import { Link} from "react-router-dom";
function Nav(){
 return(  
   <nav className='Nav'>
<div>
<ul class="nav justify-content-center bg-dark">
  <li class="nav-item">
    <a class="nav-link text-light fs-3" href="#">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light fs-3" href="#">Menu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light fs-3" href="#">Puntos de Venta</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light fs-3" href="/Contacto">Contacto</a>
  </li>
</ul>
</div>
  </nav>
 );
}
export default Nav;

