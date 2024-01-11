import { useState } from "react";
import Splash from "./components/Splash";

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
          <div>Top bar</div>
          <div>Click area</div>
          <div>Purchase area</div>
          <div>Footer</div>
        </>
      )}
    </main>
  );
}
