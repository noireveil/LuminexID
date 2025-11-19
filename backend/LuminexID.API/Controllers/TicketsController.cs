using Microsoft.AspNetCore.Mvc;
using LuminexID.API.DTOs.Tickets;
using LuminexID.API.Services.Interfaces;

namespace LuminexID.API.Controllers;
[ApiController]
[Route("api/v1/tickets")]
public class TicketsController : ControllerBase {
    private readonly ITicketService _service;
    public TicketsController(ITicketService service) { _service = service; }

    [HttpPost("validate")]
    public async Task<IActionResult> Validate([FromBody] ValidationRequestDto request) {
        var result = await _service.ValidateTicketAsync(request, 1); // 1 = dummy staffId
        return Ok(result);
    }
}
