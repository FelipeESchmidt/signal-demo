import React from "react";

import { ISignalInfoContext } from "./types";
import { useSignalBrain } from "../../hooks/useSignalBrain";
import { INodeWithChildren } from "../../types";

export const SignalInfoContext = React.createContext<ISignalInfoContext>(
  {} as ISignalInfoContext
);

export const SignalInfoProvider = ({ children }: INodeWithChildren) => {
  const { activeSignalIndex, signals } = useSignalBrain();

  return (
    <SignalInfoContext.Provider value={{ activeSignalIndex, signals }}>
      {children}
    </SignalInfoContext.Provider>
  );
};
