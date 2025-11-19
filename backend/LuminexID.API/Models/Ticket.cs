namespace LuminexID.API.Models;
public class Ticket {
    public Guid Id { get; set; } = Guid.NewGuid();
    public int UserId { get; set; }
    public int EventId { get; set; }
    public string QrSignaturePayload { get; set; } = string.Empty;
    public string Status { get; set; } = "ACTIVE";
    public string TicketType { get; set; } = "REGULAR";
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UsedAt { get; set; }
    public User? User { get; set; }
    public Event? Event { get; set; }
}
