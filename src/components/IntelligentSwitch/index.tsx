import React from "react";

import { SignalInfoContext } from "../../contexts/SignalInfoContext";
import * as S from "./styles";

export const IntelligentSwitch = () => {
  const { isIntelligent, setIsIntelligent } =
    React.useContext(SignalInfoContext);

  return (
    <S.SwitchContainer>
      <S.SwitchInput
        type="checkbox"
        checked={isIntelligent}
        onChange={() => setIsIntelligent(!isIntelligent)}
      />
    </S.SwitchContainer>
  );
};
