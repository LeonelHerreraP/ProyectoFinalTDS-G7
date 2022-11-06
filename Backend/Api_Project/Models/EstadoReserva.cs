using System;
using System.Collections.Generic;

namespace Api_Project.Models
{
    public partial class EstadoReserva
    {
        public EstadoReserva()
        {
            Habitaciones = new HashSet<Habitacione>();
            Reservaciones = new HashSet<Reservacione>();
        }

        public int Id { get; set; }
        public string? Estado { get; set; }

        public virtual ICollection<Habitacione> Habitaciones { get; set; }
        public virtual ICollection<Reservacione> Reservaciones { get; set; }
    }
}
