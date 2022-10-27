import { useRef } from "react";
import './Login.css';
import { Outlet,Link } from "react-router-dom";

export const Login = () => {
  //Inputs
  const email = useRef("");
  const contraseña = useRef("");

  async function Logearse(e) {
    e.preventDefault();
    /*
    Proceso login
    */

    /*
    onClick={Logearse} 
    */
  }

  return (
    <div className="App">
      <div className="contenedorLogin">
        <div className='divInicio'>
          <form>
            <img className="mb-4" src="/img/pixlr-bg-result.png" alt="" width="auto" height="100" />
            <h1 className="h2 mb-4 fw-normal titulo">Iniciar sesión</h1>

            <div className="form-floating">
              <input ref={email} type="email" className="form-control" id="floatingInput" placeholder="User" />
              <label htmlFor="floatingInput">Usuario</label>
            </div>
            <div className="form-floating mt-3">
              <input ref={contraseña} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            <br></br>
            <Link to="/inicio">
              <img className="Im-Camp" src="imagen/campana.png" alt="campana" />
            </Link>
            <Outlet/>
            {/*<button onClick={Logearse} className="w-100 btn btn-lg btn-primary mt-3"></button>*/}
            <p className="mt-5 mb-3 text-muted ano">© 2022</p>
          </form>

        </div>
      </div>
    </div>
  )
}
export default Login;