using System;
using System.Collections.Generic;

namespace Api_Project.Models
{
    public partial class Habitacione
    {
        public Habitacione()
        {
            Reservaciones = new HashSet<Reservacione>();
        }

        public int Id { get; set; }
        public string? Tipo { get; set; }
        public int? EstadoId { get; set; }

        public virtual EstadoReserva? Estado { get; set; }
        public virtual ICollection<Reservacione> Reservaciones { get; set; }
    }
}
