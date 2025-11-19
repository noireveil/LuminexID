using LuminexID.API.DTOs.Tickets;
namespace LuminexID.API.Services.Interfaces;
public interface ITicketService {
    Task<List<TicketDto>> GetMyTicketsAsync(int userId);
    Task<ValidationResponseDto> ValidateTicketAsync(ValidationRequestDto request, int staffId);
    Task<TicketDto> GenerateTicketAsync(int userId, int eventId, string ticketType);
}
