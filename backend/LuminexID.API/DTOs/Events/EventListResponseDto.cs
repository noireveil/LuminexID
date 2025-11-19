namespace LuminexID.API.DTOs.Events;
public class EventListResponseDto {
    public List<EventDto> Data { get; set; } = new();
    public int Total { get; set; }
    public int Page { get; set; }
}
