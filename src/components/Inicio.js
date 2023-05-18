import React from 'react';
import { Link } from 'react-router-dom';
import Promociones from './Promociones';
import Carrusel from'./Carrusel'
import Reneno from './reneno';
import Redes from './Redes';
import Ubicaciones from './Ubicaciones';

import './estilos.css';

function Inicio() {
    return (
      <div>
        <Carrusel/>
        <Promociones/>
       <Reneno/>
       <Redes/>
      <Ubicaciones/>
      </div>
    );
  }
  export default Inicio;  