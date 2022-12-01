import "./Inicio.css";
import { useEffect, useState } from 'react';
import NavBar from '../componentes/NavBar';

export function Inicio() {

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
                            

                            <li className="list-group-item">
                                <div>
                                    <h6 className="tit"> Habitacion:</h6> {reserva.tipoHabitacion} <br />
                                    <h6 className="tit"> Cliente:</h6> {reserva.nombreCliente} <br />
                                    <h6 className="tit"> Estado: </h6> {reserva.estado} <br />
                                    <h6 className="tit"> Nota: </h6>{reserva.notas} <br />
                                </div>
                            </li>

                        ))}

                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Inicio;
