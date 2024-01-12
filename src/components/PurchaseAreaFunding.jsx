
import "./purchasarea.css";
export default function PurchaseAreaFunding({
  funds,
  setFunds,
  setIncome,
  carbon,
  setCarbon,
  setSequester,
  sequester,
  envInv,
  setEnvInv,
  renInv,
  setRenInv,
}) {
  //button 1
  function handleClickEnv() {
    setFunds(funds - 5000);
    setEnvInv(envInv + 1);
    setSequester(sequester + 0.5);
    setIncome((curr) => {
      return curr + 100;
    });
  }
//button 2
  function handleClickRen() {
    setFunds(funds - 100000);
    setCarbon(carbon + 10000);
    setRenInv(renInv + 1);
    setSequester(sequester + 1);
    setIncome((curr) => {
      return curr + 1000;
    });
  }

  return (
    <div className="purchase-area">
      <h3>Invest green</h3>
      <div>
        <button onClick={handleClickEnv} disabled={funds < 5000}>
          Invest in enviroment <br></br> £5,000
        </button>
        <p className="small-text">investments: {envInv}</p>
      </div>
      <div>
        <button onClick={handleClickRen} disabled={funds < 100000}>
          Invest in renewables <br></br> £100,000
        </button>
        <p className="small-text">investments: {renInv}</p>
      </div>
    </div>
  );
}
