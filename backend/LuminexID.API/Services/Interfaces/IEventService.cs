using LuminexID.API.DTOs.Events;
namespace LuminexID.API.Services.Interfaces;
public interface IEventService {
    Task<EventListResponseDto> GetEventsAsync(int page, int limit);
    Task<EventDto?> GetEventByIdAsync(int id);
    Task<EventDto> CreateEventAsync(EventDto eventDto);
}
