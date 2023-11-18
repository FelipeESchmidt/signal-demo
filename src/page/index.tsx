import React from "react";

import Intersection from "../components/Intersection";
import { useSignalBrain } from "../hooks/useSignalBrain";

const App: React.FunctionComponent = () => {
  const { signals } = useSignalBrain();
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {signals.map((signal) => (
        <Intersection signal={signal} key={signal.id} />
      ))}
    </div>
  );
};

export default App;
