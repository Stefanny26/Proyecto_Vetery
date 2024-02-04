import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-light p-4">
      <div className="container">
      
        <div className="row">
          <div className="col-md-4">
            <div className="contacto1">
              <h4>CONTACTA CON NOSOTROS</h4>
              <p>
                <strong>Teléfonos:</strong> 916 221 269 - 639 141 764<br />
                <strong>Email:</strong> vetesanto@telefonica.net<br />
                <strong>Dirección:</strong> Universidad de las Fuerzas Armadas "ESPE"
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="horario">
              <h4>HORARIO</h4>
              <p>
                <strong>Lunes a Viernes:</strong> 10:00 a 14:00 h y 17:00 a 20:30 h<br />
                <strong>Sábados:</strong> 11:00 a 14:00 h
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="enlaces-legales">
              <h4>ENLACES LEGALES</h4>
              <ul>
                <li><a href="/aviso-legal">Aviso Legal</a></li>
                <li><a href="/politica-privacidad">Política de Privacidad</a></li>
                <li><a href="/politica-cookies">Política de Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>
        <p><center><b>&copy; 2024 Clínica Veterinaria. Todos los derechos reservados.</b></center></p>  
      </div>
    </footer>
  )
}
