import React from "react";
import { defaultSignals, yellowLitPeriod } from "../../constants";
import { ISignalProps } from "./types";
import { SignalColorsType } from "../../types";

export const useSignalBrain = () => {
  const nOfSignals = defaultSignals.length;

  const [isIntelligent, setIsIntelligent] = React.useState(true);
  const [greenTimeout, setGreenTimeout] = React.useState<NodeJS.Timeout>();
  const [yellowTimeout, setYellowTimeout] = React.useState<NodeJS.Timeout>();

  const [activeSignalIndex, setActiveSignalIndex] = React.useState(0);
  const [signals, setSignals] = React.useState<ISignalProps[]>([
    ...defaultSignals.map((signal, index) => ({
      ...signal,
      litColor: (index === 0 ? "green" : "red") as SignalColorsType,
    })),
  ]);

  const [nOfCars, setNOfCars] = React.useState<{ id: number; n: number }[]>(
    signals.map(({ id }) => ({ id, n: 0 }))
  );

  const hasCarOnActiveSignal = nOfCars[activeSignalIndex].n > 0;
  const nOfCarsWaiting = nOfCars.reduce((acc, nOfCar) => acc + nOfCar.n, 0);

  const clearTimeouts = () => {
    clearTimeout(greenTimeout);
    clearTimeout(yellowTimeout);
  };

  const setNextActiveSignal = (signalIndex: number) => {
    const newSignals = [...signals].map((signal) => ({
      ...signal,
      litColor: "red" as SignalColorsType,
    }));

    const currentSignal = newSignals[activeSignalIndex];
    const nextSignal = newSignals[signalIndex];

    currentSignal.litColor = "yellow";

    setSignals(newSignals);

    setYellowTimeout(
      setTimeout(() => {
        setActiveSignalIndex(signalIndex);
        currentSignal.litColor = "red";
        nextSignal.litColor = "green";
        setSignals(newSignals);
      }, yellowLitPeriod)
    );
  };

  const increaseNOfCars = (signalIndex: number) => {
    const cars = [...nOfCars];
    cars[signalIndex].n += 1;
    setNOfCars(cars);
  };

  const decreaseNOfCars = (signalIndex: number) => {
    const cars = [...nOfCars];
    cars[signalIndex].n -= 1;
    cars[signalIndex].n = cars[signalIndex].n < 0 ? 0 : cars[signalIndex].n;
    setNOfCars(cars);
  };

  React.useEffect(() => {
    clearTimeouts();
    const activeSignal = signals[activeSignalIndex];
    const nextActiveSignalIndex = (activeSignalIndex + 1) % nOfSignals;

    setGreenTimeout(
      setTimeout(() => {
        setNextActiveSignal(nextActiveSignalIndex);
      }, activeSignal.greenLitPeriod)
    );

    const carInterval = setInterval(() => {
      decreaseNOfCars(activeSignalIndex);
    }, 1000);

    return () => {
      clearTimeouts();
      clearInterval(carInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSignalIndex]);

  React.useEffect(() => {
    if (!isIntelligent) return;

    const isSomeYellow = signals.some(({ litColor }) => litColor === "yellow");

    if (hasCarOnActiveSignal || !nOfCarsWaiting || isSomeYellow) return;

    const correctSignalOrder = Array.from({ length: nOfSignals }).map(
      (_, i) => (activeSignalIndex + i) % nOfSignals
    );

    const nextSignalIndexWithCar = correctSignalOrder.find(
      (signalIndex) => nOfCars[signalIndex].n > 0
    );

    if (!nextSignalIndexWithCar) return;

    setNextActiveSignal(nextSignalIndexWithCar);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nOfCarsWaiting, hasCarOnActiveSignal, activeSignalIndex, isIntelligent]);

  return {
    increaseNOfCars,
    activeSignalIndex,
    signals,
    nOfCars,
    isIntelligent,
    setIsIntelligent,
  };
};

export * from "./types";
