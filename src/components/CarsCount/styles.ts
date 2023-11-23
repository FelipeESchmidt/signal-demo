import styled from "styled-components";

export const CarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

export const CarLabel = styled.label`
  display: flex;
  align-items: flex-end;
  font-weight: bold;
  font-size: 18px;
  &:after {
    content: "\u{1F697}";
    font-size: 22px;
    margin-left: 5px;
  }
`;

export const CarButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 0;

  &:hover {
    background-color: #45a049;
  }
`;
