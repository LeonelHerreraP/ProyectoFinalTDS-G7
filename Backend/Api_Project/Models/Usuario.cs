using System;
using System.Collections.Generic;

namespace Api_Project.Models
{
    public partial class Usuario
    {
        public int Id { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? Nombre { get; set; }
    }
}
