namespace LuminexID.API.DTOs.Auth;
public class LoginResponseDto {
    public string Token { get; set; } = string.Empty;
    public int ExpiresIn { get; set; }
}
