function TipSlider() {
  const tipAmount = 0;
  return (
    <div className="tipSlider">
      <h2>Tip: {tipAmount}%</h2>
      {/* add slider with text field showing the tip percentage */}
      <input type="range" />
    </div>
  );
}

export default TipSlider;
