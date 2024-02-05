import { useState } from "react";
import "./App.css";
import AmountBillTip from "./components/AmountBillTip";
import BillAmount from "./components/BillAmount";
import TipSlider from "./components/TipSlider";
import TotalAmount from "./components/TotalAmount";

function App() {
  const [enteredAmount, setEnteredAmount] = useState(122.5);
  const [amount, setAmount] = useState(122.5);
  const [tip, setTip] = useState(10);
  const VAT = 25;

  return (
    <>
      <BillAmount />
      <TipSlider /> {/* how do I add a SLIDER??? */}
      <AmountBillTip amount={enteredAmount} tip={tip} />
      {/* add the total amount (bill amount with tip and VAT) */}
      <TotalAmount amount={amount} VAT={VAT} />
    </>
  );
}

export default App;
