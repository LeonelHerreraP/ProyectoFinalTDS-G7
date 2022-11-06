using Api_Project.Interfaces;

namespace Api_Project.Services
{
    public class ReservacionService : IReservacionService
    {
        private readonly ProyectoFinalContext _context;

        public ReservacionService(ProyectoFinalContext context)
        {
            _context = context;
        }
        public List<Reservacione> Listar()
        {
            var ban_reservas = _context.Reservaciones.ToList();
            return ban_reservas;
        }
    }
}
