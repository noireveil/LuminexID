namespace LuminexID.API.Models;
public class Event {
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public DateTime Date { get; set; }
    public string Location { get; set; } = string.Empty;
    public int TotalQuota { get; set; }
    public int AvailableQuota { get; set; }
    public decimal Price { get; set; }
    public bool IsActive { get; set; } = true;
    public ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();
}
