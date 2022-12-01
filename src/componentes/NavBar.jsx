import React from 'react'

function NavBar() {
    return (
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
                                <a class="nav-link active" aria-current="page" href="/inicio">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/reservaciones">Reservaciones</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/reservaciones-en-curso">Reservaciones en curso</a>
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

    )
}

export default NavBar