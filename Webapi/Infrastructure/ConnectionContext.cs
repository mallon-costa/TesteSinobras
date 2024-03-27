using Microsoft.EntityFrameworkCore;
using Webapi.Domain.Model;

namespace Webapi.Infrastructure
{
    public class ConnectionContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Attendance> Attendances { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
          => optionsBuilder.UseNpgsql(
              "Server=postgres;" +
              "Port=5432;Database=system_employee;" +
              "User Id=postgres;" +
              "Password=123;");
    }
}
