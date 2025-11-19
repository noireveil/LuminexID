using LuminexID.API.Services.Interfaces;
namespace LuminexID.API.Services.Implementations;
public class CryptographyService : ICryptographyService {
    public string SignPayload(string payload) => "signed_" + payload;
    public bool VerifySignature(string payload, string signature) => true;
}
