using Api_Project.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReversacionesController : ControllerBase
    {

        [HttpGet]
        [Route("Listar")]
        public async Task<ActionResult<List<Reservacione>>> Listar([FromServices] IReservacionService reser)
        {
            var response =  reser.Listar();
            return Ok(response);
        }
    }
}
