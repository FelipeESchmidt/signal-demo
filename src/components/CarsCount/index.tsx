import * as React from "react";

import * as S from "./styles";

export interface ICarsCountProps {
  nOfCars: number;
  increaseNOfCars: () => void;
}

export const CarsCount = ({ nOfCars, increaseNOfCars }: ICarsCountProps) => {
  return (
    <S.CarContainer>
      <S.CarLabel />
      <S.CarButton onClick={increaseNOfCars}>{nOfCars}</S.CarButton>
    </S.CarContainer>
  );
};
