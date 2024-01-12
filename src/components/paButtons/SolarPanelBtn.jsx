import { useState } from "react";

export default function SolarPanelBtn({
  funds,
  setFunds,
  setCarbon,
  carbon,
  solarPanelNum,
  setSolarPanelNum,
}) {
  const [slideSolarPanel, setslideSolarPanel] = useState(1);
  const [solarPanelCost, setSolarPanelCost] = useState(1000);

  //slider function
  function handleChangeSolarPanelSlider(event) {
    const newOption1Value = parseInt(event.target.value, 10);
    setslideSolarPanel(newOption1Value);
    setSolarPanelCost(1000 * newOption1Value);
  }
  //purchase button
  function handleClickSolarPanelBuy() {
    setFunds(funds - solarPanelCost);
    setSolarPanelNum(solarPanelNum + slideSolarPanel);
    setCarbon(carbon + slideSolarPanel * 1000);
  }
  return (
    <div>
      <button
        onClick={handleClickSolarPanelBuy}
        disabled={funds < solarPanelCost}
      >
        Solar Panels x {slideSolarPanel} <br></br> £
        {solarPanelCost.toLocaleString("en")}
      </button>
      <input
        onChange={handleChangeSolarPanelSlider}
        type="range"
        name="solar panels"
        id="solarPanels"
        min="1"
        max="100"
        defaultValue={slideSolarPanel}
      />
      <p></p>
      <p className="small-text">constructed:{solarPanelNum}</p>
    </div>
  );
}
