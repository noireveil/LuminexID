using LuminexID.API.Data;
using LuminexID.API.DTOs.Transactions;
using LuminexID.API.Services.Interfaces;

namespace LuminexID.API.Services.Implementations;
public class TransactionService : ITransactionService {
    private readonly AppDbContext _context;
    public TransactionService(AppDbContext context) { _context = context; }

    public async Task<PurchaseResponseDto> PurchaseTicketAsync(PurchaseRequestDto request, int userId) {
        await Task.CompletedTask;
        return new PurchaseResponseDto { TransactionId = "TRX-001", Status = "SUCCESS" };
    }

    public async Task<bool> ProcessPaymentAsync(string transactionId, string paymentMethod) {
        await Task.CompletedTask;
        return true;
    }
}
