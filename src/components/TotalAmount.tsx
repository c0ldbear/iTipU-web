interface TotalAmountProps {
  amount: number;
  VAT: number;
}

function TotalAmount({ amount, VAT }: TotalAmountProps) {
  const calculateTotalAmount = (): number => {
    amount;
    VAT;
    return 0;
  };

  return (
    <div>
      <h3>Total Amount</h3>
      <h2>{calculateTotalAmount()} kr</h2>
      <p>VAT included ({VAT}%)</p>
    </div>
  );
}

export default TotalAmount;
