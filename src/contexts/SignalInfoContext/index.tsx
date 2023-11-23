import React from "react";

import { ISignalInfoContext } from "./types";
import { useSignalBrain } from "../../hooks/useSignalBrain";
import { INodeWithChildren } from "../../types";

export const SignalInfoContext = React.createContext<ISignalInfoContext>(
  {} as ISignalInfoContext
);

export const SignalInfoProvider = ({ children }: INodeWithChildren) => {
  return (
    <SignalInfoContext.Provider value={{ ...useSignalBrain() }}>
      {children}
    </SignalInfoContext.Provider>
  );
};
