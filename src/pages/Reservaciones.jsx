import React from 'react'
import { useEffect, useState } from 'react';
import NavBar from '../componentes/NavBar'
import ReservaCard from '../componentes/ReservaCard'

function Reservaciones() {
  const [Reservas, setReservas] = useState([]);

  useEffect(() => {
    const fecthReservas = async () => {
      const response = await fetch('https://localhost:7071/api/Reversaciones/ListarReservacionProgramada');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const respuesta = await response.json();
      if (respuesta) {
        setReservas(respuesta);
      }
    };
    fecthReservas();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="cuerpa">
        <div className="card block" style={{ width: "70rem" }}>
          <div className="card-header">
            Reservaciones Pendientes
          </div>
          <ul className="list-group list-group-flush">
            {Reservas.map((reserva, i) => (
              <ReservaCard key={i} reserva={reserva} />
            ))}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Reservaciones