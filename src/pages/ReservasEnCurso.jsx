import React from 'react'
import { useEffect, useState } from 'react';
import NavBar from '../componentes/NavBar'
import ReservaCardCurso from '../componentes/ReservaCardCurso'


export default function ReservasEnCurso() {
  const [Reservas, setReservas] = useState([]);

  useEffect(() => {
    const fecthReservas = async () => {
      const response = await fetch('https://localhost:7071/api/Reversaciones/ListarReservacionCurso');

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
            Reservaciones en Curso
          </div>
          <ul className="list-group list-group-flush">
            {Reservas.map((reserva, i) => (
              <ReservaCardCurso key={i} reserva={reserva} />
            ))}
          </ul>
        </div>
      </div>
    </div>

  )
}
