import React, { useContext } from "react";

import { SignalInfoContext } from "../../contexts/SignalInfoContext";
import Intersection from "../Intersection";
import * as S from "./styles";

export const Semaphore = () => {
  const { signals, increaseNOfCars } = useContext(SignalInfoContext);
  return (
    <S.StyledSemaphoreContainer>
      {signals.map((signal) => (
        <Intersection
          signal={signal}
          key={signal.id}
          increaseNOfCars={() => increaseNOfCars(signal.id)}
        />
      ))}
    </S.StyledSemaphoreContainer>
  );
};
