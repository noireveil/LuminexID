namespace LuminexID.API.DTOs.Transactions;
public class PurchaseRequestDto {
    public int EventId { get; set; }
    public int Quantity { get; set; }
    public string PaymentMethod { get; set; } = string.Empty;
}
