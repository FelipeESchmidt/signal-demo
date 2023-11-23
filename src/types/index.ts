import React from "react";

export interface IDefaultSignalProps {
  id: number;
  greenLitPeriod: number;
}

export type SignalColorsType = "red" | "yellow" | "green";

export interface INodeWithChildren {
  children: React.ReactNode;
}
