import { useState } from "react";

export default function SolarPanelBtn({
  funds,
  setFunds,
  setCarbon,
  carbon,
  ePTNum,
  setEPTNum,
}) {
  const [slideEPT, setslideEPT] = useState(1);
  const [ePTCost, setEPTCost] = useState(10000);

  //slider funnction
  function handleChangeSlider(event) {
    const newValue = parseInt(event.target.value, 10);
    setslideEPT(newValue);
    setEPTCost(10000 * newValue);
  }
  //purchase button
  function handleClick() {
    setFunds(funds - ePTCost);
    setEPTNum(ePTNum + slideEPT);
    setCarbon(carbon + slideEPT * 5000);
  }
  return (
    <div>
      <button onClick={handleClick} disabled={funds < ePTCost}>
        {" "}
        Electrical Public Transport x {slideEPT} <br></br> £
        {ePTCost.toLocaleString("en")}
      </button>
      <input
        onChange={handleChangeSlider}
        type="range"
        name="EPT"
        id="EPT"
        min="1"
        max="100"
        defaultValue={slideEPT}
      />
      <p></p>
      <p className="small-text">constructed:{ePTNum}</p>
    </div>
  );
}
