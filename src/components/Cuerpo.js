
import React from 'react';
import './estilos.css';
import Promociones from './Promociones';
import Redes from './Redes';
function Cuerpo(){
 return(  

<div class="container ">
  <div class="row">
    <div class="col-sm-10 ">
      <Promociones/>
    </div>
    <div class="col-sm-2 text-center">
    <Redes/>
    </div>

  </div>
</div>

);
}
export default Cuerpo;