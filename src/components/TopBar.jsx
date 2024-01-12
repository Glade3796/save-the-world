import "./topbar.css";
export default function TopBar({ setPage, funds, carbon, }) {
  function handleClickMenu() {
    setPage(0);
  }
  return (
    <div className="top-bar">
      <div>
        <button onClick={handleClickMenu}>Menu</button>
        <button
          onClick={() => {
            setPage(2);
          }}
        >
          Info
        </button>
      </div>
      <div className="carbon-counter">
        <h2>
          Carbon: {carbon.toLocaleString("en", { maximumFractionDigits: 0 })}{" "}
          tons
        </h2>
        
      </div>
      <div className="funding-counter">
        <h2>Funds: £</h2>
        <h2>{funds}</h2>
      </div>
    </div>
  );
}
