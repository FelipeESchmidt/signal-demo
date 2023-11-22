import * as React from "react";

import Street from "../Street";
import { Signal } from "../Signal";

import * as S from "./styles";
import { ISignalProps } from "../../hooks/useSignalBrain";

export interface IIntersectionProps {
  signal: ISignalProps;
  nOfCars: number;
  increaseNOfCars: () => void;
}

export const Intersection = ({
  signal,
  nOfCars,
  increaseNOfCars,
}: IIntersectionProps) => {
  return (
    <S.IntersectionContainer>
      <Signal litColor={signal.litColor} />
      <Street />
      <button onClick={increaseNOfCars}>Add</button>
      <p>{nOfCars}</p>
    </S.IntersectionContainer>
  );
};

export default Intersection;
