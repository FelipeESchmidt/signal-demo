import * as React from "react";

import { ISignalProps } from "../../hooks/useSignalBrain";
import Street from "../Street";
import { Signal } from "../Signal";
import { CarsCount } from "../CarsCount";

import * as S from "./styles";

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
      <CarsCount increaseNOfCars={increaseNOfCars} nOfCars={nOfCars} />
    </S.IntersectionContainer>
  );
};

export default Intersection;
