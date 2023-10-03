import { styled } from "styled-components";

export const StreetContainer = styled.div`
  position: relative;
  width: 250px;
  height: 100px;
  background-color: black;
  border-radius: 16px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: inset 0 0 2px 1px rgba(255, 255, 255, 0.5),
    1px 1px 2px 0 rgba(255, 255, 255, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 5%;
    right: 5%;
    transform: translateY(-1px);
    border: 2px dashed yellow;
    border-style: dashed;
  }
`;
