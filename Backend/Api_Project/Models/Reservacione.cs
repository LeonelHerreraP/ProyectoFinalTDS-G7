using System;
using System.Collections.Generic;

namespace Api_Project.Models
{
    public partial class Reservacione
    {
        public int Id { get; set; }
        public string? NombreCliente { get; set; }
        public string? Notas { get; set; }
        public int? HabitacionId { get; set; }
        public int? EstadoId { get; set; }

        public virtual EstadoReserva? Estado { get; set; }
        public virtual Habitacione? Habitacion { get; set; }
    }
}
