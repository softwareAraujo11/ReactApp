import React from 'react';
import './estilos.css';
function Ubicaciones(){
 return(  
<div class="container bg-dark text-light">
  <div class="row">
    <div class="col-sm-4">
      <div class="ubicacion text-center">Manrique:{<br/>} Carrera 43 # 77-01</div>
      <div class="ubicacion text-center">Bello:{<br/>} Carrera 54 # 22-102</div>
    </div>
    <div class="col-sm-4">
      <div class="ubicacion text-center">Calasanz:{<br/>} Calle 53 # 83-13</div>
      <div class="ubicacion text-center">Itagui:{<br/>} Carrera 43 # 77-01</div>
    </div>
    <div class="col-sm-4">
      <div class="ubicacion text-center">Envigado:{<br/>} Carrera 38 # 32A-06</div>
      <div class="ubicacion text-center">Robledo:{<br/>} Carrera 75 # 46-01</div>
    </div>
  </div>
</div>
 );
}
export default Ubicaciones;