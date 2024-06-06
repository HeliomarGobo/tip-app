import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6,
})`
  background-color: #4dbba4;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;
export const RoundedButtonContainer = styled(ButtonContainer)`
  height: 40px;
  width: 110px;
  border-radius: 20px;
`;


export const CircleButtonContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6,
})`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    background-color: #FAFAFA;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`