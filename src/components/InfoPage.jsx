import "./infoPage.css";
import { useState, useEffect } from "react";
export default function InfoPage({
  setPage,
  carbon,
  carbonEmission,
  funds,
  trees,
  sequester,
  income,
  carbonEmissionReduction,
}) {
  //maths for the carbon emission rate
  const carbonEmissionRate = 100; 
  const emissionInterval = carbonEmission + carbonEmissionReduction;
  const [carbonEmissionPerMinute, setCarbonEmissionPerMinute] = useState(0);

  //useEffect to execute above math
  useEffect(() => {
    const interval = setInterval(() => {
      const calculatedRatePerMinute = (
        (carbonEmissionRate * 60000) /
        emissionInterval
      ).toFixed(2);
      setCarbonEmissionPerMinute(calculatedRatePerMinute);
    }, emissionInterval);

    return () => clearInterval(interval);
    
  }, [carbonEmissionRate, emissionInterval]);
  return (
    <>
      <div className="infopage-container">
        <h1>Info page</h1>
        <div>
          <div>
            <h3>Carbon emissions</h3>
            <p>
              <b>{carbon.toLocaleString("en", { maximumFractionDigits: 0 })}</b>{" "}
              tons of carbon needs to be sequestered each year to prevent human
              anhilation.
            </p>
            <p>
              <b>{carbonEmissionPerMinute.toLocaleString("en")}</b> tons of
              carbon are being emited each minute (or{" "}
              {(carbonEmissionPerMinute / 60).toLocaleString("en", {
                maximumFractionDigits: 0,
              })}
              t/sec).
            </p>
          </div>
          <div>
            <h3>Sequestering</h3>
            <p>
              <b>{(sequester * 6000).toLocaleString("en", { maximumFractionDigits: 0 })}</b> tons of carbon
              are being sequestered each minute (or {sequester * 100}t/sec).
            </p>
            <p>
              <b>{trees}</b> trees each sequester 0.01 tons per seconds.
            </p>
          </div>
          <div>
            <h3>Funding</h3>
            <p>
              Your current income is <b>£{income * 600}</b> per minute.
            </p>
            <p>
              Your current budget is <b>£{funds.toLocaleString("en")}</b>.
            </p>
          </div>
        </div>
        <div>
          <button onClick={() => setPage(1)}>Resume</button>
          <button onClick={() => setPage(0)}>Menu</button>
        </div>
      </div>
    </>
  );
}
