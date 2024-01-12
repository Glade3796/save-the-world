import { useEffect, useState } from "react";
import Splash from "./components/Splash";
import TopBar from "./components/TopBar";
import ClickArea from "./components/ClickArea";
import PurchaseArea from "./components/PurchaseArea";
import PurchaseAreaFunding from "./components/PurchaseAreaFunding";
import InfoPage from "./components/InfoPage";

export default function App({ trees }) {
  //set page state to cycle through different pages
  const [page, setPage] = useState(0);

  //set carbon counter & funds state
  const [carbon, setCarbon] = useState(() => {
    const storedData = localStorage.getItem("storage");
    return storedData ? JSON.parse(storedData).carbon : 1000000000;
  });

  const [carbonEmission, setCarbonEmission] = useState(() => {
    const storedData = localStorage.getItem("storage");
    return storedData ? JSON.parse(storedData).carbonEmission : 9;
  });

  const [funds, setFunds] = useState(() => {
    const storedData = localStorage.getItem("storage");
    return storedData ? JSON.parse(storedData).funds : 0;
  });

  const [sequester, setSequester] = useState(() => {
    const storedData = localStorage.getItem("storage");
    return storedData ? JSON.parse(storedData).sequester : 0;
  });

  const [income, setIncome] = useState(() => {
    const storedData = localStorage.getItem("storage");
    return storedData ? JSON.parse(storedData).income : 10;
  });

  const [carbonEmissionReduction, setCarbonEmissionReduction] = useState(() => {
    const storedData = localStorage.getItem("storage");
    return storedData ? JSON.parse(storedData).carbonEmissionReduction : 0;
  });

  const [solarPanelNum, setSolarPanelNum] = useState(() => {
    const storedData = localStorage.getItem("storage");
    return storedData ? JSON.parse(storedData).solarPanelNum : 0;
  });

  const [ePTNum, setEPTNum] = useState(() => {
    const storedData = localStorage.getItem("storage");
    return storedData ? JSON.parse(storedData).ePTNum : 0;
  });

  const [envInv, setEnvInv] = useState(() => {
    const storedData = localStorage.getItem("storage");
    return storedData ? JSON.parse(storedData).envInv : 0;
  });

  const [renInv, setRenInv] = useState(() => {
    const storedData = localStorage.getItem("storage");
    return storedData ? JSON.parse(storedData).renInv : 0;
  });
  //storage
  useEffect(() => {
    const storage = {
      page: page,
      carbon: carbon,
      carbonEmission: carbonEmission,
      funds: funds,
      sequester: sequester,
      income: income,
      carbonEmissionReduction: carbonEmissionReduction,
      solarPanelNum: solarPanelNum,
      ePTNum: ePTNum,
      envInv: envInv,
      renInv: renInv,
    };
    localStorage.setItem("storage", JSON.stringify(storage));
    const storedData = localStorage.getItem("storage");
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      // Set state values based on the parsed data
      setCarbon(parsedData.carbon);
      setCarbonEmission(parsedData.carbonEmission);
      setFunds(parsedData.funds);
      setSequester(parsedData.sequester);
      setIncome(parsedData.income);
      setCarbonEmissionReduction(parsedData.carbonEmissionReduction);
      setSolarPanelNum(parsedData.solarPanelNum);
      setEPTNum(parsedData.ePTNum);
      setEnvInv(parsedData.envInv);
      setRenInv(parsedData.renInv);
    }
  }, [page,
    carbon,
    carbonEmission,
    funds,
    sequester,
    income,
    carbonEmissionReduction,
    solarPanelNum,
    ePTNum,
    envInv,
    renInv,
  ]);

  //carbon emissions (ticker increases constantly)
  useEffect(() => {
    const carbonEmissionInterval = setInterval(() => {
      setCarbon((curr) => curr + 1000);
    }, carbonEmission + carbonEmissionReduction);
    return () => {
      clearInterval(carbonEmissionInterval);
    };
  }, [carbon, carbonEmission, carbonEmissionReduction]);

  //funding (ticker constantly increases)
  useEffect(() => {
    const incomeInterval = setInterval(() => {
      setFunds((curr) => {
        return curr + income;
      });
    }, 100);
    return () => {
      clearInterval(incomeInterval);
    };
  }, [income, setFunds, setIncome]);

  //Sequester carbon counteracts carbon emission rate
  useEffect(() => {
    const sequesterInterval = setInterval(() => {
      setCarbon((curr) => curr - sequester);
    }, 5);
    return () => {
      clearInterval(sequesterInterval);
    };
  }, [sequester, carbon]);


  return (
    <main>
      {page === 0 && <Splash setPage={setPage} />}
      {page === 1 && (
        <>
          <TopBar
            setPage={setPage}
            carbon={carbon}
            funds={funds}
            sequester={sequester.toFixed(3)}
          />

          <ClickArea
            carbon={carbon}
            setCarbon={setCarbon}
            funds={funds}
            setFunds={setFunds}
            sequester={sequester}
            setSequester={setSequester}
            trees={trees}
          />
          <div className="pa-box">
            <PurchaseArea
              carbonEmissionReduction={carbonEmissionReduction}
              setCarbonEmissionReduction={setCarbonEmissionReduction}
              funds={funds}
              setFunds={setFunds}
              carbon={carbon}
              setCarbon={setCarbon}
              solarPanelNum={solarPanelNum}
              setSolarPanelNum={setSolarPanelNum}
              ePTNum={ePTNum}
              setEPTNum={setEPTNum}
            />
            <PurchaseAreaFunding
              funds={funds}
              setFunds={setFunds}
              carbon={carbon}
              setCarbon={setCarbon}
              setIncome={setIncome}
              sequester={sequester}
              setSequester={setSequester}
              setCarbonEmission={setCarbonEmission}
              envInv={envInv}
              setEnvInv={setEnvInv}
              renInv={renInv}
              setRenInv={setRenInv}
            />
          </div>
        </>
      )}
      {page === 2 && (
        <InfoPage
          setPage={setPage}
          carbon={carbon}
          carbonEmission={carbonEmission}
          carbonEmissionReduction={carbonEmissionReduction}
          funds={funds}
          trees={trees}
          sequester={sequester}
          income={income}
        />
      )}
    </main>
  );
}
