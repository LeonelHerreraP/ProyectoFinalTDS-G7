import { useRef } from "react";
import './Login.css';
import { Outlet, Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export const Login = () => {
  //Inputs
  const user = useRef("");
  const contraseña = useRef("");
  
  const navigate = useNavigate();

  async function Logearse(e) {

    e.preventDefault();
    if (user.current.value !== "" && contraseña.current.value !== "") {
      const response = await fetch(
        'https://localhost:7071/api/Usuarios/Login/'+user.current.value+'/'+contraseña.current.value
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${ response.status }`);
      }

      const respuesta = await response.json();


      if (respuesta !== false) {
        navigate('/Inicio');//Manda a la pagina principal
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Datos invalidos!'
        });
      }
    }
    else {
      Swal.fire({
        icon: 'question',
        title: 'Oops...',
        text: 'Campos vacíos!'
      });
    }

  }

  return (
    <div className="App">
      <div className="contenedorLogin">
        <div className='divInicio'>
          <form>
            <img className="mb-4" src="/img/pixlr-bg-result.png" alt="" width="auto" height="100" />
            <h1 className="h2 mb-4 fw-normal titulo">Iniciar sesión</h1>

            <div className="form-floating">
              <input ref={user} type="user" className="form-control" id="floatingInput" placeholder="User" />
              <label htmlFor="floatingInput">Usuario</label>
            </div>
            <div className="form-floating mt-3">
              <input ref={contraseña} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            <br></br>
              <img onClick={Logearse} className="Im-Camp" src="imagen/campana.png" alt="campana" />
            <p className="mt-5 mb-3 text-muted ano">© 2022</p>
          </form>

        </div>
      </div>
    </div>
  )
}
export default Login;