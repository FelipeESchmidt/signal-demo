import * as React from "react";

import * as S from "./styles";

export interface ICarsCountProps {
  nOfCars: number;
  increaseNOfCars: () => void;
}

export const CarsCount = ({ nOfCars, increaseNOfCars }: ICarsCountProps) => {
  return (
    <S.CarContainer>
      <S.CarLabel>{nOfCars}</S.CarLabel>
      <S.CarButton onClick={increaseNOfCars}>+1</S.CarButton>
    </S.CarContainer>
  );
};
