import * as React from "react";

import * as S from "./styles";
import { Signal } from "../Signal";
import Street from "../Street";

export const Intersection = () => {
  return (
    <S.StreetContainer>
      <Signal litColor="yellow" />
      <Street />
    </S.StreetContainer>
  );
};

export default Intersection;
