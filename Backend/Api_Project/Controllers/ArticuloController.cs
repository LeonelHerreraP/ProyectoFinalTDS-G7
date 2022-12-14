using Api_Project.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticuloController : ControllerBase
    {

        [HttpGet]
        [Route("Listar")]
        public async Task<ActionResult<List<ArticulosHotel>>> Listar([FromServices] IArticuloService Arti)
        {
            var response = Arti.Listar();
            return Ok(response);

        }
    }
}
