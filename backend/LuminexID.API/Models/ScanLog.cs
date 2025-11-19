namespace LuminexID.API.Models;
public class ScanLog {
    public int Id { get; set; }
    public Guid TicketId { get; set; }
    public int? StaffId { get; set; }
    public string ScanResult { get; set; } = string.Empty;
    public DateTime ScannedAt { get; set; } = DateTime.UtcNow;
}
