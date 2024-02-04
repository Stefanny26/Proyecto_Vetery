import Logo from './Imagenes/Logo.png';  // Reemplaza 'logo.png' con la ruta de tu logo
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
  return (
    <header className="bg-white p-3 shadow-sm mb-2">
    <div className="logo-container">
      <img src={Logo} alt="Logo Veterinaria" className="logo" />
    </div>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav font-weight-bold">
            <li className="nav-item">
              <a className="nav-link" href="<Main />"><b>Inicio</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="<./Servicios.js>"><b>Servicios</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Citas.js"><b>Citas</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Citas.js"><b>Compra todo</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Contacto.js"><b>Contacto</b></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}
