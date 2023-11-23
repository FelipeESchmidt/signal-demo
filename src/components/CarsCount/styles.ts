import styled from "styled-components";

export const CarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const CarLabel = styled.label`
  margin-right: 10px;
  &:after {
    content: "\u{1F697}";
    font-size: 18px;
    color: #333;
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
