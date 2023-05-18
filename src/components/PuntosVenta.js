import React from 'react';
import './estilos.css';
import CardUbicacion from './CardUbicacion';
function PuntosVenta(){
 return(  

<div id='ubis'>
<CardUbicacion
      ubicacion="Manrique"
      direccion ="Carrera 43 # 77-01"
      ciudad = "Antioquia, Medellín"  
      celular = "3203263915"
      />
      <CardUbicacion
      ubicacion="Bello"
      direccion ="Carrera 54 # 22-102"
      ciudad = "Antioquia, Medellín"  
      celular = "3209394452"
      />
      <CardUbicacion
      ubicacion="Calasanz"
      direccion ="Calle 53 # 83-13"
      ciudad = "Antioquia, Medellín"  
      celular = "3209399453"
      />
      <CardUbicacion
      ubicacion="Itagui"
      direccion ="Carrera 43 # 77-01"
      ciudad = "Antioquia, Medellín"  
      celular = "3209399459"
      />
            <CardUbicacion
      ubicacion="Envigado"
      direccion ="Carrera 38 # 32A-06"
      ciudad = "Antioquia, Medellín"  
      celular = "3209394414"
      />
            <CardUbicacion
      ubicacion="Robledo"
      direccion ="Carrera 75 # 46-01"
      ciudad = "Antioquia, Medellín"  
      celular = "3209399456"
      />
    </div>
 );
}
export default PuntosVenta;