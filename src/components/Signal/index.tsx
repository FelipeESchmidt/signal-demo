import React from "react";

import * as S from "./styles";

export const Signal = () => {
  const [n, setN] = React.useState(0);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setN((n + 1) % 3);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [n]);

  return (
    <S.StyledSignalContainer>
      <S.StyledLight color="red" on={n === 0} />
      <S.StyledLight color="yellow" on={n === 1} />
      <S.StyledLight color="green" on={n === 2} />
    </S.StyledSignalContainer>
  );
};
