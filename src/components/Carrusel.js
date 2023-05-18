import './estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';

const Carrusel = () => {
  return (
<div id='tamañocarrusel'>
<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img id='imagenCarrusel'src={require(`../imagenes/foto_americana.jpg`)} className="d-block w-100" alt='Americana '   />
    </div>
    <div className="carousel-item">
    <img id='imagenCarrusel'src={require(`../imagenes/foto_hawaiana.jpg`)} className="d-block w-100" alt='Americana '/>
    </div>
    <div className="carousel-item">
    <img id='imagenCarrusel'src={require(`../imagenes/foto_pepperoni.jpg`)} className="d-block w-100" alt='Americana '/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default Carrusel
