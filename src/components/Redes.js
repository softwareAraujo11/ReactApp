
import React from 'react';
import './estilos.css';
function Redes(){
 return(  
<div class="container ">
<div class="row">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
</div>
<div class="row">
<div class="col-sm-8 ">
<img id='imagenRedes'src={require(`../imagenes/logo_facebook.png`)}/>
    </div>
    <div class="col-sm-4">
    <a href="https://www.facebook.com/" id='nombreRed'>Facebook</a>
    </div>
    <div class="row">
    <br/>
    <br/>
    <br/>
</div>
</div>
<div class="row">
<div class="col-sm-8 ">
<img id='imagenRedes'src={require(`../imagenes/logo_instagram.png`)}/>
</div>
<div class="col-sm-4 ">
<a href="https://www.instagram.com/" id='nombreRed'>Instagram</a>
    </div>
    <div class="row">
    <br/>
    <br/>
    <br/>
</div>
</div>

<div class="row">
<div class="col-sm-8 ">
<img id='imagenRedes'src={require(`../imagenes/logo_whatsapp.png`)}/>
</div>
<div class="col-sm-4 ">
<a href="https://www.whatsapp.com/" id='nombreRed'>Whatsapp</a>
    </div>
    </div>
</div>
);
}
export default Redes;