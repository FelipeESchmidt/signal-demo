import styled from "styled-components";

export const SwitchContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  margin: 10px;
`;

export const SwitchInput = styled.input`
  appearance: none;
  width: 80px;
  height: 30px;
  background-color: #333;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  outline: none;

  &:checked {
    background-color: #4caf50;
  }

  &:before {
    content: "${(props) => (props.checked ? "ON" : "OFF")}";
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    left: ${(props) => (props.checked ? "50%" : "0")};
    transform: ${(props) =>
      props.checked ? "translateX(-50%)" : "translateX(0)"};
    transition: 0.3s;
    padding-left: 8px;
  }

  &:after {
    content: "${(props) => (props.checked ? "\u{1F92F}" : "\u{1F971}")}";
    position: absolute;
    font-size: 18px;
    color: #333;
    left: 5px;
    top: 50%;
    transform: translateY(-50%)
      ${(props) => (props.checked ? "rotate(0deg)" : "rotate(360deg)")};

    transition: 0.3s;
  }

  &:checked:after {
    color: #fff;
  }
`;
