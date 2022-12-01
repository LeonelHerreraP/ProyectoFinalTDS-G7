import React from 'react'
import "./ReservaCard.css";

function ReservaCard({ reserva }) {

    async function CancelarReserva(e) {
        e.preventDefault();
        const response = await fetch(
            'https://localhost:7071/api/Reversaciones/CancelarReserva/' + reserva.id,
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        window.location.reload();//Refresca la pagina
    }

    async function ConfirmarReserva(e) {
        e.preventDefault();
        const response = await fetch(
            'https://localhost:7071/api/Reversaciones/ConfirmarReserva/' + reserva.id,
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        window.location.reload();//Refresca la pagina
    }


    return (
        <li className="list-group-item">
            <div>
                <h6 className="tit"> Habitacion:</h6> {reserva.tipoHabitacion} <br />
                <h6 className="tit"> Cliente:</h6> {reserva.nombreCliente} <br />
                <h6 className="tit"> Estado: </h6> {reserva.estado} <br />
                <h6 className="tit"> Nota: </h6>{reserva.notas} <br />
                <img className='btnCard' onClick={ConfirmarReserva} src="imagen/cheque.png" alt="cheque" />
                <img className='btnCard' onClick={CancelarReserva}src='imagen/remover.png' alt='remover'/>
            </div>
        </li>
    )
}

export default ReservaCard