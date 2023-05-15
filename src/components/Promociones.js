import React from 'react';
import './estilos.css';
import Cards from './Cards';
function Promociones(){
 return(  

<div>
    <h1>PROMOCIONES DEL DIA</h1>
<Cards
      image="americana"
      tittle ="Pizza Americana"
      ingredientes="Jamón ahumado, salami y doble queso." />
      <Cards 
      image="hawaiana"
      tittle ="Pizza Hawaiana"
      ingredientes="Jamón ahumado, piña y doble queso." />
      <Cards
       image="pepperoni"
      tittle ="Pizza Pepperoni"
      ingredientes="Pepperoni, doble queso" />
</div>

 );
}
export default Promociones;