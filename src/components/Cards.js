import React from 'react';
import './estilos.css';
function Cards(props){
      return(
      <div className="container">
        <div className='ds-flex s'>
        <img id='imagenCards'
          src={require(`../imagenes/foto_${props.image}.jpg`)}
            alt='Americana '
            />
            <div class="content" >
            <h2>{props.tittle}</h2>
            <p>{props.ingredientes}</p>
        </div>
            </div>
            </div>
    );
}
export default Cards;

