using LuminexID.API.Data;
using LuminexID.API.DTOs.Events;
using LuminexID.API.Services.Interfaces;

namespace LuminexID.API.Services.Implementations;
public class EventService : IEventService {
    private readonly AppDbContext _context;
    public EventService(AppDbContext context) { _context = context; }

    public async Task<EventListResponseDto> GetEventsAsync(int page, int limit) {
        await Task.CompletedTask; // Fix CS1998
        return new EventListResponseDto { Data = new List<EventDto>(), Total = 0, Page = page };
    }

    public async Task<EventDto?> GetEventByIdAsync(int id) {
        await Task.CompletedTask; // Fix CS1998
        return null;
    }

    public async Task<EventDto> CreateEventAsync(EventDto eventDto) {
        await Task.CompletedTask; // Fix CS1998
        return eventDto;
    }
}
