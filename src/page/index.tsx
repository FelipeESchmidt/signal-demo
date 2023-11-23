import React from "react";

import { SignalInfoProvider } from "../contexts/SignalInfoContext";
import { Semaphore } from "../components/Semaphore";
import { IntelligentSwitch } from "../components/IntelligentSwitch";

const App: React.FunctionComponent = () => {
  return (
    <SignalInfoProvider>
      <IntelligentSwitch />
      <Semaphore />
    </SignalInfoProvider>
  );
};

export default App;
