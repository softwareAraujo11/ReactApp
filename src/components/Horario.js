import React from 'react';
import './estilos.css';
function Horario(){
 return(  
<div className='Horario d-flex justify-content-center align-items-center flex-column'>
  

  <div className='text-center bg-primary-subtle'>
    <h1>HORARIO DE ATENCION</h1>
  </div>

  <div className='bg-primary-subtle d-flex justify-content-between'>
    <div className='flex-fill text-center mx-2'>
      <p>Lunes</p>
      <p>8:00am - 9:00pm</p>
    </div>
    <div className='flex-fill text-center mx-2'>
      <p>Martes</p>
      <p>8:00am - 10:00pm</p>
    </div>
    <div className='flex-fill text-center mx-2'>
      <p>Miercoles</p>
      <p>8:00am - 11:00pm</p>
    </div>
    <div className='flex-fill text-center mx-2'>
      <p>Jueves</p>
      <p>8:00am - 12:00pm</p>
    </div>
    <div className='flex-fill text-center mx-2'>
      <p>Viernes</p>
      <p>8:00pm - 1:00pm</p>
    </div>
    <div className='flex-fill text-center mx-2'>
      <p>Sabado</p>
      <p>2:00pm - 11:00pm</p>
    </div>
    <div className='flex-fill text-center mx-2'>
      <p>Domingo</p>
      <p>2:00pm - 11:00pm</p>
    </div>
  </div>
</div>


 );
}
export default Horario;
