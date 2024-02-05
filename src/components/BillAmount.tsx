import { useState } from "react";

function BillAmount() {
  const [billAmount, setBillAmount] = useState("");

  return (
    <div>
      <label htmlFor="billAmount">Enter Bill Amount: </label>
      <input
        value={billAmount}
        onChange={(e) => {
          let value = e.target.value;
          console.log(value);
          setBillAmount(value);
        }}
        type="text"
        id="billAmount"
        name="billAmount"
      />
    </div>
  );
}

export default BillAmount;
