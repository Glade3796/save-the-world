import { useState } from "react";
import Splash from "./components/Splash";
import TopBar from "./components/TopBar";

export default function App() {
  const [page, setPage] = useState(0);
  return (
    <main>
      {page === 0 && (
        <div>
          <Splash setPage={setPage} />
        </div>
      )}
      {page === 1 && (
        <>
          <div className="top-bar">
            <TopBar setPage={setPage} />
          </div>
          <div>Click area</div>
          <div>Purchase area</div>
          <div>Footer</div>
        </>
      )}
    </main>
  );
}
