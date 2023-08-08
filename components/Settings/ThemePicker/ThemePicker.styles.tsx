import styled from "styled-components/native";

const ThemePickerWrapper = styled.View`
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: ${(props) => props.theme.BORDER_RADIUS};
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  min-height: 118px;
`;

interface ColourButtonProps {
  primaryColour: string;
}

const ColourButton = styled.Pressable<ColourButtonProps>`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin: 9px;
  background-color: ${(props) => props.primaryColour};
`;

export default { ThemePickerWrapper, ColourButton };
