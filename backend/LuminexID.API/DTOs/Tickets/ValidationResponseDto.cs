namespace LuminexID.API.DTOs.Tickets;
public class ValidationResponseDto {
    public string Status { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    public string? TicketOwner { get; set; }
    public string? TicketType { get; set; }
}
