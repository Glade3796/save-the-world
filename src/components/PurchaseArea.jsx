import "./purchasarea.css";
import { useEffect} from "react";
import SolarPanelBtn from "./paButtons/SolarPanelBtn";
import ElectricalPTBtn from "./paButtons/ElectricalPTBtn";

export default function PurchaseArea({
  setFunds,
  funds,
  carbon,
  setCarbon,
  carbonEmissionReduction,
  setCarbonEmissionReduction,
  solarPanelNum,
  setSolarPanelNum,
  ePTNum,
  setEPTNum,
}) {
  //Calculate carbon emission reduction rate
  useEffect(() => {
    const solar = solarPanelNum / 20;
    const transport = ePTNum / 5;
    setCarbonEmissionReduction(
      (curr) => {
        console.log(curr, solar, transport);
        return curr + solar + transport;
      },
      [solarPanelNum, ePTNum, setCarbonEmissionReduction]
    );
    return () => {
      setCarbonEmissionReduction(carbonEmissionReduction);
    };
  }, [solarPanelNum, ePTNum, setCarbonEmissionReduction, carbonEmissionReduction]);
  return (
    <div className="purchase-area">
      <h3>Slow carbon emissions</h3>
      <SolarPanelBtn
        funds={funds}
        setFunds={setFunds}
        carbon={carbon}
        setCarbon={setCarbon}
        solarPanelNum={solarPanelNum}
        setSolarPanelNum={setSolarPanelNum}
      />
      <ElectricalPTBtn
        funds={funds}
        setFunds={setFunds}
        carbon={carbon}
        setCarbon={setCarbon}
        ePTNum={ePTNum}
        setEPTNum={setEPTNum}
      />
    </div>
  );
}
