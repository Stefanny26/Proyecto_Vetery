import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';

export const Contactos = () => {
    return (
        <div>
            <Header />
            <div className="container ">
                <div className="row">
                    <div className="col-md-4">
                        {/* Div para el mapa */}
                        <div className="mapa">
                            <h1>SIGUE EN <br></br>
                                <b>CONTACTO</b> </h1>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contacto">
                                    <h4 className='mt-4' >CONTACTA CON NOSOTROS</h4>
                                    <p className='mt-4'>
                                        <strong> Teléfonos:</strong> 916 221 269 - 639 141 764<br />
                                        <strong> Email:</strong> vetesanto@telefonica.net<br />
                                        <strong> Dirección:</strong> Universidad de las Fuerzas Armadas "ESPE"
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="horario">
                                    <h4 className='mt-4'>HORARIO</h4>
                                    <p className='mt-4'>
                                        <strong>Lunes a Viernes:</strong> 10:00 a 14:00 h y 17:00 a 20:30 h<br />
                                        <strong>Sábados:</strong> 11:00 a 14:00 h
                                    </p>
                                </div>
                            </div>

                            <div className="mapa-container">
                                {/* Google Maps Embed API */}
                                <iframe
                                    title="Google Maps"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE_LONGITUDE!2dYOUR_LONGITUDE!1dYOUR_LATITUDE!3dYOUR_ZOOM_LEVEL!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xYOUR_LATITUDE_LONGITUDE!2zYOUR_LOCATION!5e0!3m2!1sen!2sus!4vYOUR_API_KEY"
                                    width="100%"
                                    height="280"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12  formulario mb-3">
                        {/* Div para el formulario de contacto */}
                        <div className="formulario-container col-7">
                            <h2>Contáctanos</h2>
                            <form className='row mb-3'>
                                <div className="form-group col-6">
                                    <label htmlFor="nombre">Nombre:</label>
                                    <input type="text" className="form-control" id="nombre" name="nombre" required />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="email">Correo Electrónico:</label>
                                    <input type="email" className="form-control" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mensaje">Mensaje:</label>
                                    <textarea className="form-control" id="mensaje" name="mensaje" rows="4" required></textarea>
                                </div>
                                <center><button type="submit" className="btn btn-primary col-6 mt-2 mb-6">Enviar Mensaje</button></center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
