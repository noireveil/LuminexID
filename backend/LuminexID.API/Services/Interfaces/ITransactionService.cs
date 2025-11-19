using LuminexID.API.DTOs.Transactions;
namespace LuminexID.API.Services.Interfaces;
public interface ITransactionService {
    Task<PurchaseResponseDto> PurchaseTicketAsync(PurchaseRequestDto request, int userId);
    Task<bool> ProcessPaymentAsync(string transactionId, string paymentMethod);
}
