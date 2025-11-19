namespace LuminexID.API.DTOs.Events;
public class EventDto {
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public DateTime Date { get; set; }
    public string Location { get; set; } = string.Empty;
    public decimal Price { get; set; }
}
