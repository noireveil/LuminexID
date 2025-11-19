using System.Text.Json.Serialization;
namespace LuminexID.API.DTOs.Tickets;
public class ValidationRequestDto {
    [JsonPropertyName("qr_payload")] public string QrPayload { get; set; } = string.Empty;
    [JsonPropertyName("device_id")] public string DeviceId { get; set; } = string.Empty;
    [JsonPropertyName("location_gate")] public string LocationGate { get; set; } = string.Empty;
}
