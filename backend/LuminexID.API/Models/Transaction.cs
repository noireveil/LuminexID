namespace LuminexID.API.Models;
public class Transaction {
    public int Id { get; set; }
    public string TransactionId { get; set; } = string.Empty;
    public int UserId { get; set; }
    public int EventId { get; set; }
    public int Quantity { get; set; }
    public decimal TotalAmount { get; set; }
    public string PaymentMethod { get; set; } = string.Empty;
    public string Status { get; set; } = "PENDING";
}
