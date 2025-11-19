using LuminexID.API.Data;
using LuminexID.API.DTOs.Auth;
using LuminexID.API.Services.Interfaces;

namespace LuminexID.API.Services.Implementations;
public class AuthService : IAuthService {
    private readonly AppDbContext _context;
    public AuthService(AppDbContext context) { _context = context; }

    public async Task<LoginResponseDto> LoginAsync(LoginRequestDto request) {
        await Task.CompletedTask;
        return new LoginResponseDto { Token = "dummy_token", ExpiresIn = 3600 };
    }

    public async Task<LoginResponseDto> RegisterAsync(RegisterRequestDto request) {
        await Task.CompletedTask;
        return new LoginResponseDto { Token = "dummy_token_reg", ExpiresIn = 3600 };
    }

    public async Task<bool> ValidateTokenAsync(string token) {
        await Task.CompletedTask;
        return true;
    }
}
