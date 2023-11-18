import * as React from "react";

import Street from "../Street";
import { Signal } from "../Signal";

import * as S from "./styles";

export const Intersection = () => {
  // const { activeSignalIndex, signals } = useSignalBrain();
  return (
    <S.StreetContainer>
      <Signal litColor="yellow" />
      <Street />
    </S.StreetContainer>
  );
};

export default Intersection;
