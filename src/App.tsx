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
      <TipSlider />
      <AmountBillTip amount={enteredAmount} tip={tip} />
      <TotalAmount amount={amount} VAT={VAT} />
    </>
  );
}

export default App;
