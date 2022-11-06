using Api_Project.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HabitacionController : ControllerBase
    {


        [HttpGet]
        [Route("Listar")]
        public async Task<ActionResult<List<Habitacione>>> Listar([FromServices] IHabitacionService habit)
        {
            var response = habit.Listar();
            return Ok(response);

        }
    } 
}
