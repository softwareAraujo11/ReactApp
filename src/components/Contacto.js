import React from 'react';
import { Link } from 'react-router-dom';
import './estilos.css';
function Contanco() {
    return (
      <div>
        <br/>
        <br/>
        <h1 id='h1formulario'>CONTACTO</h1>
        <br/>
        <br/>
<div>
<form class="contact-form">
  <div>
    <label for="name">Nombre:</label>
    <input type="text" id="name" name="name" required />
  </div>
  <div>
    <label for="phone"> Número de teléfono: </label>
    <input type="tel" id="phone" name="phone" required />
  </div>
  <div>
    <label for="city">Ciudad:</label>
    <input type="text" id="city" name="city" required />
  </div>
  <div>
    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email" required />
  </div>
  <div>
    <label for="subject">Asunto:</label>
    <input type="text" id="subject" name="subject" required />
  </div>
  <div>
    <label for="message">Mensaje:</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  <div>
    <button type="submit">Enviar</button>
  </div>
</form>

</div>
      </div>
    );
  }
  export default Contanco;  