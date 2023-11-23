import React from "react";

import { SignalColorsType } from "../../types";

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
    <S.StyledSignalContainer litColor={litColor}>
      {signalColors.map((color) => (
        <S.StyledLight key={color} color={color} on={`${litColor === color}`} />
      ))}
    </S.StyledSignalContainer>
  );
};
