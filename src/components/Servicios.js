import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar el archivo de estilos de Bootstrap
import peluqueriaImage from './Imagenes/peluqueria.jpg';
import ServicioImage from './Imagenes/servicio1.jpg';
import ServicioImage1 from './Imagenes/servicio3.jpg';
import Vet1 from './Imagenes/Vet1.jpg';
import Vet2 from './Imagenes/vet2.jpg';
import Vet3 from './Imagenes/Vet5.jpg';
import Vet4 from './Imagenes/vet4.jpg';

export const Servicios = () => {

  return (
    <div>
      <Header />
      <div className='container'>
        <Card className='mt-4'>
          <Card.Header as="h2" >Nuestros Medicos</Card.Header>
        </Card>
        <div className='row mt-2'>
          <div className='col mt-4 d-flex justify-content-between'>

            <Card className='mb-4' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Vet3}/>
              <Card.Body>
                <Card.Title>Dr. Juan Pérez</Card.Title>
                <Card.Text>
                  Veterinario especializado en Nutrición Animal.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Especialidad: Nutricionista</ListGroup.Item>
                <ListGroup.Item>Experiencia: Más de 10 años</ListGroup.Item>
                <ListGroup.Item>Idiomas: Español, Inglés</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Más información</Card.Link>
              </Card.Body>
            </Card>

            <Card className='mb-4' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Vet2} />
              <Card.Body>
                <Card.Title>Dra. Maria Rodríguez</Card.Title>
                <Card.Text>
                  Veterinaria especializada en Fisioterapia Animal.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Especialidad: Fisioterapeuta</ListGroup.Item>
                <ListGroup.Item>Experiencia: Más de 8 años</ListGroup.Item>
                <ListGroup.Item>Idiomas: Español, Francés</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Más información</Card.Link>
              </Card.Body>
            </Card>

            <Card className='mb-4' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Vet1} />
              <Card.Body>
                <Card.Title>Dra. Laura Gómez</Card.Title>
                <Card.Text>
                  Cardióloga especializada en enfermedades cardíacas en animales.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Especialidad: Cardiólogo</ListGroup.Item>
                <ListGroup.Item>Experiencia: Más de 12 años</ListGroup.Item>
                <ListGroup.Item>Idiomas: Español, Inglés</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Más información</Card.Link>
              </Card.Body>
            </Card>

            <Card className='mb-4' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Vet4} />
              <Card.Body>
                <Card.Title>Dr. Carlos Martínez</Card.Title>
                <Card.Text>
                  Cirujano especializado en intervenciones quirúrgicas en animales.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Especialidad: Cirujano</ListGroup.Item>
                <ListGroup.Item>Experiencia: Más de 15 años</ListGroup.Item>
                <ListGroup.Item>Idiomas: Español, Italiano</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Más información</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>

        <Card>
          <Card.Header as="h2">Nuestros Servicios</Card.Header>
        </Card>
        <div className='row mb-3'>
          <div className='col-4 mt-4'>
            <Card border="secondary" className='Card_Servicio1'>
              <Card.Header> <h4>Atención de Calidad para Tus Mascotas</h4></Card.Header>
              <Card.Body>
                <Card.Text>
                  Ofrecemos una amplia gama de servicios veterinarios para garantizar
                  la salud y el bienestar de tus mascotas. Nuestro equipo de
                  profesionales altamente capacitados está aquí para ayudarte.
                </Card.Text>
                <ul>
                  <li>Consultas Médicas</li>
                  <li>Vacunación y Desparasitación</li>
                  <li>Cirugía Veterinaria</li>
                  <li>Exámenes de Laboratorio</li>
                </ul>
              </Card.Body>
            </Card>
          </div>
          <div className='col-8'>
            <Carousel className='mt-4'>
              <Carousel.Item className='col-8'>
                <img className="d-block w-100 " src={peluqueriaImage} alt="First slide" />
                <Carousel.Caption>
                  <h3>Peluqueria</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={ServicioImage} alt="Second slide" />
                <Carousel.Caption>
                  <h3>Exámenes de Laboratorio</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={ServicioImage1} alt="Second slide" />
                <Carousel.Caption>
                  <h3>Fisioterapia Animal</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>


      </div>
      <Footer /></div>
  )
}
