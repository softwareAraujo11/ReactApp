import React from 'react';
import './estilos.css';
import Cards from './Cards';
function Promociones(){
 return(  

<div>
    <h1 className='promo'>PROMOCIONES DEL DIA</h1>
    <div className='tarjeta'>
    <Cards
      image="americana"
      tittle ="Pizza Americana"
      ingredientes="Jamón ahumado, salami y doble queso." />
      </div>
      <div className='tarjeta'>
      <Cards 
      image="hawaiana"
      tittle ="Pizza Hawaiana"
      ingredientes="Jamón ahumado, piña y doble queso." />
    </div>
    <div className='tarjeta'>
      <Cards
       image="pepperoni"
      tittle ="Pizza Pepperoni"
      ingredientes="Pepperoni, doble queso" />
    </div>
</div>

 );
}
export default Promociones;