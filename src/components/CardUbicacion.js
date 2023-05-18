import React from 'react';
import './estilos.css';
function CardUbicacion(props){
      return(
      <div id='contenedorUbicacion' className="container">
        <div className='ds-flex '>
       <div>
       <div class="row">
    <div class="col-sm-6 ">
      <h1 id='lugar'>{props.ubicacion}</h1>
    </div>
    <div class="col-sm-6 text-center">
    <h1></h1>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6 ">
      <h1></h1>
    </div>
    <div class="col-sm-6 text-center">
    <a href= "https://www.google.com/maps"> <h1 id='verUbicacion'>ver ubicación</h1></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6 ">
      <h1>{props.direccion}</h1>
      <h1>{props.ciudad}</h1>
    </div>
    <div class="col-sm-6 text-center">
    <h1></h1>
    </div>
  </div>
  <div class="row">
  </div>
       </div>
       <div id='divLogoNum'>
       <img id='imagenUbicacion'src={require(`../imagenes/logo_telefono.png`)} />
<h1>{props.celular}</h1>
       </div>
            </div>
            </div>
    );
}
export default CardUbicacion;
/*
<img id='imagenCards'
src={require(`../imagenes/foto_${props.image}.jpg`)}
  alt='Americana '
  />
  <div class="content" >
  <h2>{ props.tittle}</h2>
  <p>{props.ingredientes}</p>
</div>
*/