namespace LuminexID.API.Services.Interfaces;
public interface ICryptographyService {
    string SignPayload(string payload);
    bool VerifySignature(string payload, string signature);
}
