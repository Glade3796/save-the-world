export default function TopBar({ setPage }) {
  function handleClickMenu() {
    setPage(0);
  }
  return (
    <>
      <button onClick={handleClickMenu}>Menu</button>
      <div className="carbon-counter">
        <h2>Carbon</h2>
        <h2>Counter</h2>
        <h2>tons</h2>
      </div>
      <div className="funding-counter">
        <h2>Funds:</h2>
        <h2>Counter</h2>
      </div>
    </>
  );
}
