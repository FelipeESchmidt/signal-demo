import React from "react";

import { SignalInfoProvider } from "../contexts/SignalInfoContext";
import { Semaphore } from "../components/Semaphore";

const App: React.FunctionComponent = () => {
  return (
    <SignalInfoProvider>
      <Semaphore />
    </SignalInfoProvider>
  );
};

export default App;
