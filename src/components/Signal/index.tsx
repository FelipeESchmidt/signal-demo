import React from "react";

import { SignalColorsType } from "@types";
import * as S from "./styles";

export interface ISignalProps {
  litColor: SignalColorsType;
}

const signalColors = ["red", "yellow", "green"] as [
  SignalColorsType,
  SignalColorsType,
  SignalColorsType
];

export const Signal = ({ litColor }: ISignalProps) => {
  return (
    <S.StyledSignalContainer>
      {signalColors.map((color) => (
        <S.StyledLight color={color} on={litColor === color} />
      ))}
    </S.StyledSignalContainer>
  );
};
