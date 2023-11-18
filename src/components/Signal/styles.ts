import { styled } from "styled-components";
import { SignalColorsType } from "../../types";

export const StyledSignalContainer = styled.div`
  width: 100px;
  height: 250px;
  background-color: black;
  border-radius: 16px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: inset 0 0 8px 1px rgba(255, 255, 255, 0.5),
    1px 1px 2px 0 rgba(255, 255, 255, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const StyledLight = styled.div<{
  color: SignalColorsType;
  on?: boolean;
}>`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  filter: opacity(${({ on }) => (on ? "1" : "0.4")});

  box-shadow: 0 0 6px 3px ${(props) => props.color};

  &::after {
    content: "";
    position: absolute;
    top: 30%;
    right: 30%;
    width: 3px;
    height: 10px;
    border-radius: 100%;
    border-right: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 2px 0 white, 0 0 8px 1px white, inset 0 0 4px 0 white;
  }
`;
