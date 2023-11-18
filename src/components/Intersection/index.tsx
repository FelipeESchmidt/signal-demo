import * as React from "react";

import Street from "../Street";
import { Signal } from "../Signal";

import * as S from "./styles";
import { ISignalProps } from "../../hooks/useSignalBrain";

export interface IIntersectionProps {
  signal: ISignalProps;
}

export const Intersection = ({ signal }: IIntersectionProps) => {
  return (
    <S.IntersectionContainer>
      <Signal litColor={signal.litColor} />
      <Street />
    </S.IntersectionContainer>
  );
};

export default Intersection;
