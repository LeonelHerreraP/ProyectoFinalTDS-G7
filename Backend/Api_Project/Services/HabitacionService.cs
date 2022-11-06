using Api_Project.Interfaces;

namespace Api_Project.Services
{
    public class HabitacionService : IHabitacionService 
    {
        private readonly ProyectoFinalContext _context;

        public HabitacionService(ProyectoFinalContext context)
        {
            _context = context;
        }
        public List<Habitacione> Listar()
        {
            var habitachiones = _context.Habitaciones.ToList();
            return habitachiones;
        }
    }
}
