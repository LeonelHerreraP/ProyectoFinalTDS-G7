import "./Inicio.css";
import { useEffect, useState } from 'react';

export function Inicio() {

    const [Reservas, setReservas] = useState([]);

    useEffect(() => {
        const fecthReservas = async () => {
            const response = await fetch('https://localhost:7071/api/Reversaciones/Listar');

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
            <nav class="navbar bg-light fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Hotel Name</a>
                    <img className="logoHotel" src="imagen/Logo.png" alt="logo" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Hotel Name</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/reservaciones">Reservaciones</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Reservaciones en curso</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Habitaciones</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Inventario</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="cuerpa">
                <div className="card block" style={{ width: "70rem" }}>
                    <div className="card-header">
                        Reservaciones en Curso
                    </div>
                    <ul className="list-group list-group-flush">
                        {Reservas.map((reserva, i) => reserva.estado == "En Curso" && (
                            

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
