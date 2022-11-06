using Api_Project.Interfaces;

namespace Api_Project.Services

{
    public class UsuarioService : IUsuarioService
    {
        private readonly ProyectoFinalContext _context;

        public UsuarioService(ProyectoFinalContext context)
        {
            _context = context;
        }

        public bool Login(string user, string contraseña )
        {
            var usuarios = _context.Usuarios.Where(usuario => usuario.Username == user && usuario.Password == contraseña).ToList();

            if(usuarios.Count == 0)
            {
                return false;
            }
            else
            {
                return true;
            }
            
        }
    }
}
