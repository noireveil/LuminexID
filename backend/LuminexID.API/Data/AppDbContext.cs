using LuminexID.API.Models;
using Microsoft.EntityFrameworkCore;
namespace LuminexID.API.Data;
public class AppDbContext : DbContext {
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<User> Users => Set<User>();
    public DbSet<Event> Events => Set<Event>();
    public DbSet<Ticket> Tickets => Set<Ticket>();
    public DbSet<Transaction> Transactions => Set<Transaction>();
    public DbSet<ScanLog> ScanLogs => Set<ScanLog>();
}
