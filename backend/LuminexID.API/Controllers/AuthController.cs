using Microsoft.AspNetCore.Mvc;
using LuminexID.API.DTOs.Auth;
using LuminexID.API.Services.Interfaces;

namespace LuminexID.API.Controllers;
[ApiController]
[Route("api/v1/auth")]
public class AuthController : ControllerBase {
    private readonly IAuthService _service;
    public AuthController(IAuthService service) { _service = service; }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequestDto request) {
        var result = await _service.LoginAsync(request);
        return Ok(result);
    }
}
