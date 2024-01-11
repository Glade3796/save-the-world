export default function Splash({ setPage }) {
  function handleClickNewGame() {
    setPage(1);
  }
  return (
    <div className="splash-screen">
      <h1>Save the world</h1>
      <h3>A cookie clicker clone with notions</h3>
      <p>
        Sequestor the carbon from the atmosphere to hopefully save those pesky
        human beans.
      </p>
      <button onClick={handleClickNewGame}>New Game</button>
      <button>Load Game</button>
      <button>Readme</button>
      <button>Climate change</button>
    </div>
  );
}
