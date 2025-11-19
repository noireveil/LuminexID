using LuminexID.API.DTOs.Auth;
namespace LuminexID.API.Services.Interfaces;
public interface IAuthService {
    Task<LoginResponseDto> LoginAsync(LoginRequestDto request);
    Task<LoginResponseDto> RegisterAsync(RegisterRequestDto request);
    Task<bool> ValidateTokenAsync(string token);
}
