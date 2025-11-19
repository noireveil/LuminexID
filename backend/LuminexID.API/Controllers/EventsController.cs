using Microsoft.AspNetCore.Mvc;
using LuminexID.API.Services.Interfaces;

namespace LuminexID.API.Controllers;
[ApiController]
[Route("api/v1/events")]
public class EventsController : ControllerBase {
    private readonly IEventService _service;
    public EventsController(IEventService service) { _service = service; }

    [HttpGet]
    public async Task<IActionResult> GetEvents([FromQuery] int page = 1, [FromQuery] int limit = 10) {
        var result = await _service.GetEventsAsync(page, limit);
        return Ok(result);
    }
}
