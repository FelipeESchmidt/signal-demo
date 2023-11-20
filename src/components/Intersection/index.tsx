import * as React from "react";

import Street from "../Street";
import { Signal } from "../Signal";

import * as S from "./styles";
import { ISignalProps } from "../../hooks/useSignalBrain";

export interface IIntersectionProps {
  signal: ISignalProps;
  increaseNOfCars: () => void;
}

export const Intersection = ({
  signal,
  increaseNOfCars,
}: IIntersectionProps) => {
  return (
    <S.IntersectionContainer>
      <Signal litColor={signal.litColor} />
      <Street />
      <button onClick={increaseNOfCars}>Add</button>
      <p>{signal.nOfCars}</p>
    </S.IntersectionContainer>
  );
};

export default Intersection;
