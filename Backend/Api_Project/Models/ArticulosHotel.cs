using System;
using System.Collections.Generic;

namespace Api_Project.Models
{
    public partial class ArticulosHotel
    {
        public int Id { get; set; }
        public string? Articulo { get; set; }
        public int Cantidad { get; set; }
    }
}
