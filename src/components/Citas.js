import React, { useState } from 'react'
import { Header } from './Header';
import { Footer } from './Footer';

export const Citas = () => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [citaAgendada, setCitaAgendada] = useState(false);
  const [citaAgendada2, setCitaAgendada2] = useState(false);

  const handleAgendarCita = () => {
    // Aquí puedes implementar la lógica para enviar la información de la cita
    console.log('Cita agendada:', { nombre, fecha, hora });
    // También podrías enviar la información a un servidor o realizar otras acciones necesarias

    // Marcar la cita como agendada y mostrar el mensaje
    setCitaAgendada(true);
  };
  const handleAgendarCita2 = () => {
    // Aquí puedes implementar la lógica para enviar la información de la cita
    console.log('Cita agendada:', { nombre, fecha, hora });
    // También podrías enviar la información a un servidor o realizar otras acciones necesarias

    // Marcar la cita como agendada y mostrar el mensaje
    setCitaAgendada2(true);
  };
  return (
    <div> <Header />
      <div className="container">
        <div className="row ">
          {/* Div col-12 con el mensaje */}
          <div className="col-12 mb-5 mt-5 Parrafo">
            <center><h3>Reserva una cita en linea</h3></center>
            <p >
              Descubre el cuidado excepcional que tu mascota merece en nuestra clínica veterinaria. Nuestro equipo apasionado está listo para brindarle a tu amigo peludo atención personalizada y compasiva. Agendar una cita es fácil y rápido. ¡Confía en nosotros para mantener a tu mascota sana y feliz! Contáctanos hoy.
            </p>
          </div>

          {/* Div col-12 con dos col-6 para formularios de reserva */}
          <div className="col-12 ">
            <div className="row ">
              {/* Formulario para reserva médica */}
              <div className="col-6 mb-2 Citas ">
                <center><h3 className="mt-4 mb-2">Reserva Médica</h3></center>
                {!citaAgendada ? (
                  <form className="mb-4">
                    <div className="mb-3">
                      <label htmlFor="nombre" className="form-label">Nombre del Dueño</label>
                      <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="fecha" className="form-label">Fecha</label>
                      <input type="date" className="form-control" id="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="hora" className="form-label">Hora</label>
                      <input type="time" className="form-control" id="hora" value={hora} onChange={(e) => setHora(e.target.value)} />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleAgendarCita}>Agendar Cita</button>
                  </form>
                ) : (
                  <div className="text-center mt-3">
                    <p>¡Gracias por agendar la cita, nos pondremos en contacto contigo pronto!</p>
                  </div>
                )}
              </div>

              {/* Formulario para reserva de estética */}
              <div className="col-6  Citas mb-2">
                <center><h3 className="mt-4 mb-2">Reserva de Estética</h3></center>
                {!citaAgendada2 ? (
                  <form>
                    <div className="mb-3">
                      <label htmlFor="nombre" className="form-label">Nombre del Dueño</label>
                      <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="fecha" className="form-label">Fecha</label>
                      <input type="date" className="form-control" id="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="hora" className="form-label">Hora</label>
                      <input type="time" className="form-control" id="hora" value={hora} onChange={(e) => setHora(e.target.value)} />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleAgendarCita2}>Agendar Cita</button>
                  </form>
                ) : (
                  <div className="text-center mt-3">
                    <p>¡Gracias por agendar la cita, nos pondremos en contacto contigo pronto!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer /></div>
  )
}
