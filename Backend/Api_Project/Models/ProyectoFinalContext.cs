using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Api_Project.Models
{
    public partial class ProyectoFinalContext : DbContext
    {
        public ProyectoFinalContext()
        {
        }

        public ProyectoFinalContext(DbContextOptions<ProyectoFinalContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ArticulosHotel> ArticulosHotels { get; set; } = null!;
        public virtual DbSet<EstadoHab> EstadoHabs { get; set; } = null!;
        public virtual DbSet<EstadoReserva> EstadoReservas { get; set; } = null!;
        public virtual DbSet<Habitacione> Habitaciones { get; set; } = null!;
        public virtual DbSet<Reservacione> Reservaciones { get; set; } = null!;
        public virtual DbSet<Usuario> Usuarios { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=localhost;Database=ProyectoFinal;Trusted_Connection=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ArticulosHotel>(entity =>
            {
                entity.ToTable("Articulos_hotel");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Articulo)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<EstadoHab>(entity =>
            {
                entity.ToTable("Estado_hab");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Estado)
                    .HasMaxLength(40)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<EstadoReserva>(entity =>
            {
                entity.ToTable("Estado_reserva");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Estado)
                    .HasMaxLength(40)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Habitacione>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.EstadoId).HasColumnName("Estado_id");

                entity.Property(e => e.Tipo)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Estado)
                    .WithMany(p => p.Habitaciones)
                    .HasForeignKey(d => d.EstadoId)
                    .HasConstraintName("FK__Habitacio__Estad__37A5467C");
            });

            modelBuilder.Entity<Reservacione>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.EstadoId).HasColumnName("Estado_id");

                entity.Property(e => e.HabitacionId).HasColumnName("Habitacion_id");

                entity.Property(e => e.NombreCliente)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("Nombre_cliente");

                entity.Property(e => e.Notas)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.HasOne(d => d.Estado)
                    .WithMany(p => p.Reservaciones)
                    .HasForeignKey(d => d.EstadoId)
                    .HasConstraintName("FK__Reservaci__Estad__3C69FB99");

                entity.HasOne(d => d.Habitacion)
                    .WithMany(p => p.Reservaciones)
                    .HasForeignKey(d => d.HabitacionId)
                    .HasConstraintName("FK__Reservaci__Habit__3B75D760");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
