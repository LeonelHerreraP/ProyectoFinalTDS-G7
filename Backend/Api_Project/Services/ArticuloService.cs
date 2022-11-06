using Api_Project.Interfaces;

namespace Api_Project.Services
{
    public class ArticuloService : IArticuloService
    {
        private readonly ProyectoFinalContext _context;

        public ArticuloService(ProyectoFinalContext context)
        {
            _context = context;
        }
        public List<ArticulosHotel> Listar()
        {
            var articulo_hotel = _context.ArticulosHotels.ToList();
            return articulo_hotel;
        }
    }
}

