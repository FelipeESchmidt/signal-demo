import React, { useContext } from "react";

import { SignalInfoContext } from "../../contexts/SignalInfoContext";
import Intersection from "../Intersection";
import * as S from "./styles";

export const Semaphore = () => {
  const { signals, nOfCars, increaseNOfCars } = useContext(SignalInfoContext);
  return (
    <S.StyledSemaphoreContainer>
      {signals.map((signal, index) => (
        <Intersection
          signal={signal}
          key={signal.id}
          nOfCars={nOfCars[index].n}
          increaseNOfCars={() => increaseNOfCars(signal.id)}
        />
      ))}
    </S.StyledSemaphoreContainer>
  );
};
