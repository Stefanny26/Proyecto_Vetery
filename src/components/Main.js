//Atajo rafc
import React from 'react'
import portada from './Imagenes/portada.jpg';  // Reemplaza 'logo.png' con la ruta de tu logo
import peluqueriaImage from './Imagenes/peluqueria.jpg';
import nutricionImage from './Imagenes/nutricion.jpg';
import auxiliarImage from './Imagenes/Auxiliar.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Main = () => {
  return (
    <section className="inicio-section">
      <div className="imagen-container">
        <img src={portada} alt="Clínica Veterinaria" className="imagen" />
        <div className="superpuesto-texto">
          <h2>Bienvenido a Nuestra Clínica Veterinaria</h2>
          <p>Servicios de atención médica para tus mascotas.</p>
        </div>
      </div>
      <div className='container'>
        <div className="cards-seccion row row-cols-1 row-cols-md-2 g-4 mb-3 mt-3">
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title mt-2">Nuestro equipo</h5>
                <p class="card-text mt-2">Veterinaria en Santo Domingo de ESPE, con un equipo con mas de 14 años de experiencia sirviendo al pueblo Domingueño, contamos con herramientas diagnosticas de ultima generación, esto nos permite un rápido y acertado diagnóstico de su mascota, nuestro equipo de profesionales le atenderá a usted y a su mascota de forma efectiva y afectiva.</p>
                <img src={auxiliarImage} class="card-img-top" alt="..." />
              </div>
            </div>
          </div>
         
          <div class="col">
            <div class="card h-100">  
              <div class="card-body">
                <h5 class="card-title">Mision</h5>
                <p class="card-text">En nuestra veterinaria, nos comprometemos a proporcionar atención médica integral y de calidad para asegurar el bienestar y la salud de las mascotas. Nuestra misión es ser un referente en el cuidado animal, ofreciendo servicios profesionales y éticos respaldados por un equipo de expertos apasionados por la salud y felicidad de los animales. Nos esforzamos por establecer relaciones duraderas con nuestros clientes, basadas en la confianza, respeto y compasión.</p>
                <h5 class="card-title">Vision</h5>
                <p class="card-text">Aspiramos a ser reconocidos como líderes en la prestación de servicios veterinarios, destacando por nuestra excelencia en el cuidado y tratamiento de animales. Buscamos ser un centro de referencia que abrace la innovación y las mejores prácticas en medicina veterinaria. Nuestra visión es ser un espacio donde la calidad, la empatía y el compromiso se fusionen para crear experiencias positivas tanto para las mascotas como para sus dueños. Deseamos contribuir al bienestar animal y ser parte integral de comunidades que valoran y respetan la vida de sus compañeros de cuatro patas.</p>
              </div>
            </div>
          </div>
        </div>
      <hr />
      <br />
        <center><h3>Cursos</h3></center>
        <div class="row row-cols-1 row-cols-md-3 g-4 mb-3 mt-3">
          <div class="col">
            <div class="card h-100">
              <img src={auxiliarImage} class="card-img-top" alt="..." />
              <div class="card-body">
              <h5 class="card-title">Auxiliar Veterinaria</h5>
                <p class="card-text">Nuestros cursos de auxiliar veterinaria proporcionan una sólida formación para aquellos que desean desempeñar un papel vital en el campo de la medicina veterinaria. Cubrimos una amplia variedad de temas, desde anatomía y fisiología animal hasta técnicas de asistencia en procedimientos veterinarios y cuidado posoperatorio. Los estudiantes tendrán la oportunidad de adquirir experiencia práctica en entornos clínicos reales, trabajando junto a profesionales veterinarios. Al finalizar el curso, los alumnos estarán equipados con los conocimientos y habilidades necesarios para colaborar eficazmente en una clínica veterinaria.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={nutricionImage} class="card-img-top" alt="..." />
              <div class="card-body mt-4">
                <h5 class="card-title">Nutrición Animal</h5>
                <p class="card-text">Nuestros cursos de nutrición animal están diseñados para aquellos que desean comprender profundamente las necesidades dietéticas de diversas especies animales. Exploramos los principios de la nutrición, las diferentes etapas de la vida de las mascotas y las consideraciones específicas para cada especie. Además, abordamos la importancia de una dieta equilibrada para prevenir enfermedades y promover la salud a largo plazo. Los participantes obtendrán conocimientos prácticos que les permitirán asesorar a los dueños de mascotas sobre las mejores opciones alimenticias y contribuir a la salud óptima de los animales.</p>
              </div>

            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={peluqueriaImage} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Peluquería Canina</h5>
                <p class="card-text">Ofrecemos cursos especializados en peluquería canina para aquellos interesados en aprender las técnicas más avanzadas en el cuidado y estética de las mascotas. Nuestros cursos abarcan desde los fundamentos básicos hasta técnicas de corte y estilismo más avanzadas. Contamos con instructores expertos y un ambiente práctico que permite a los estudiantes adquirir habilidades prácticas esenciales. Al completar nuestro curso de peluquería canina, los graduados estarán preparados para enfrentar los desafíos del cuidado y embellecimiento de perros de todas las razas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section >
  )
}
