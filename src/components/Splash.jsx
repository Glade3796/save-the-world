import "./splash.css";
export default function Splash({ setPage }) {
  function handleClickNewGame() {
    setPage(1);
  }
  return (
    <>
      <div className="splash-screen">
        <h1>Save the world</h1>
        <h3>A cookie clicker clone with notions</h3>
        <p>
          Sequestor the carbon from the atmosphere to hopefully save those pesky
          human beans.
        </p>
        <div className="menu-button-container">
          <button onClick={handleClickNewGame}>Resume Game</button>
          <button
            onClick={() => {
              setPage(2);
            }}
          >
            Info
          </button>
          <a
            href="https://github.com/Glade3796/save-the-world/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Readme</button>
          </a>
          <a
            href="https://www.un.org/en/climatechange/what-is-climate-change"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Climate change</button>
          </a>
        </div>
      </div>
    </>
  );
}
