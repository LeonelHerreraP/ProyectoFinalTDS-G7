using Api_Project.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {

        [HttpGet]
        [Route("Login/{user}/{contraseña}")]

        public bool Login([FromServices] IUsuarioService usuario, string user, string contraseña)
        {
            var response = usuario.Login(user, contraseña);
            return response;
        }
    }
}
