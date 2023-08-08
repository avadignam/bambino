import styled from "styled-components/native";

const SettingsScreen = styled.View`
  background-color: ${(props) => props.theme.COLOUR_BACKGROUND_LIGHT};
  flex: 1;
`;

const Title = styled.Text`
  text-align: center;
  color: white;
  font-size: 30px;
  font-style: italic;
`;

const OptionText = styled.Text`
  font-size: 20px;
  color: white;
`;

const OptionContainer = styled.Pressable`
  /* border: 2px solid #f5d6e0; */
  border-radius: 10px;
  background-color: ${(props) => props.theme.COLOUR_BACKGROUND_DARK};
  margin: 10px;
  padding: 10px;
`;

const s = {
  SettingsScreen,
  Title,
  OptionText,
  OptionContainer,
};

export default s;
