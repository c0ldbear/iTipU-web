interface AmountBillTipProps {
  amount: number;
  tip: number;
}

function AmountBillTip({ amount, tip }: AmountBillTipProps) {
  const calculateAmount = (): number => {
    amount;
    tip;
    return 0;
  };

  /* add text showing the calculated amount (bill amount with tip) */
  return (
    <div className="amountBillTip">
      <h2>{calculateAmount()} kr</h2>
    </div>
  );
}

export default AmountBillTip;
