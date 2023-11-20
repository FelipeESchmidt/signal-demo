import React from "react";
import { defaultSignals, yellowLitPeriod } from "../../constants";
import { ISignalProps } from "./types";
import { SignalColorsType } from "../../types";

export const useSignalBrain = () => {
  const nOfSignals = defaultSignals.length;

  const [activeSignalIndex, setActiveSignalIndex] = React.useState(0);
  const [signals, setSignals] = React.useState<ISignalProps[]>([
    ...defaultSignals.map((signal) => ({
      ...signal,
      litColor: "red" as SignalColorsType,
      nOfCars: 0,
    })),
  ]);

  const setNextActiveSignal = (signalIndex: number) => {
    const newSignals = [...signals];
    const currentSignal = newSignals[activeSignalIndex];
    const nextSignal = newSignals[signalIndex];

    currentSignal.litColor = "yellow";

    setSignals(newSignals);

    setTimeout(() => {
      setActiveSignalIndex(signalIndex);
      currentSignal.litColor = "red";
      nextSignal.litColor = "green";
      setSignals(newSignals);
    }, yellowLitPeriod);
  };

  React.useEffect(() => {
    const activeSignal = signals[activeSignalIndex];
    const nextActiveSignalIndex = (activeSignalIndex + 1) % nOfSignals;

    const timeout = setTimeout(() => {
      setNextActiveSignal(nextActiveSignalIndex);
    }, activeSignal.greenLitPeriod);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSignalIndex]);

  const increaseNOfCars = (signalIndex: number) => {
    const newSignals = [...signals];
    const signal = newSignals.find((signal) => signal.id === signalIndex)!;
    signal.nOfCars += 1;
    setSignals(newSignals);
  };

  return {
    increaseNOfCars,
    activeSignalIndex,
    signals,
  };
};

export * from "./types";
