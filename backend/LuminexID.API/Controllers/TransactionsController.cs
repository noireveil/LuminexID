using Microsoft.AspNetCore.Mvc;
using LuminexID.API.DTOs.Transactions;
using LuminexID.API.Services.Interfaces;

namespace LuminexID.API.Controllers;
[ApiController]
[Route("api/v1/transactions")]
public class TransactionsController : ControllerBase {
    private readonly ITransactionService _service;
    public TransactionsController(ITransactionService service) { _service = service; }

    [HttpPost("purchase")]
    public async Task<IActionResult> Purchase([FromBody] PurchaseRequestDto request) {
        var result = await _service.PurchaseTicketAsync(request, 1); // 1 = dummy userId
        return Ok(result);
    }
}
