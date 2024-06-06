import styled from "styled-components/native";

export const TextBold = styled.Text`
  color: ${(props) => (props.variant === "light" ? "#FFFFFF" : "#404042")};
  font-size: ${(props) => props.fontSize ?? "16px"};
  font-weight: bold;
`;

export const TextRegular = styled.Text`
  color: ${(props) => (props.variant === "light" ? "#B0AEAF" : "#404042")};
  font-size: 16px;
  font-weight: 500;
`;
