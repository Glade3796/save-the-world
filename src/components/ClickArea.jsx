import { useState } from "react";
import "./clickarea.css";

export default function ClickArea({
  setCarbon,
  carbon,
  funds,
  setFunds,
  sequester,
  setSequester,
}) {
  //useStates
  // ForestDisable and forestDisable1 are timeout functions on the buttons
  const [forestDisable, setForestDisable] = useState(false);
  const [forestDisable1, setForestDisable1] = useState(false);
  const [trees, setTrees] = useState(0);

  //click tree sequester 21 carbons and get ten bucks
  function handleClickTree() {
    setSequester(sequester + 0.1);
    setCarbon(carbon - 21);
    setFunds(funds + 10);
    setTrees(trees + 1);
  }
  //button timesout after click
  function handleClickForest() {
    setSequester(sequester + 5);
    setCarbon(carbon - 2100);
    setFunds(funds - 100);
    setTrees(trees + 100);
    setForestDisable(true);
    setTimeout(() => {
      setForestDisable(false);
    }, 2000);
  }
  //as above but more
  function handleClickCommunity() {
    setSequester(sequester + 20);
    setCarbon(carbon - 21000);
    setFunds(funds - 1000);
    setTrees(trees + 1000);
    setForestDisable1(true);
    setTimeout(() => {
      setForestDisable1(false);
    }, 6000);
  }
  return (
    <div className="click-area">
      <div>
        <button onClick={handleClickTree}> Plant Tree</button>
        <button onClick={handleClickForest} disabled={forestDisable}>
          Plant forest
        </button>
        <button onClick={handleClickCommunity} disabled={forestDisable1}>
          Community rewilding
        </button>
      </div>
      <p>sequestering: {sequester.toFixed(3)}</p>
    </div>
  );
}
