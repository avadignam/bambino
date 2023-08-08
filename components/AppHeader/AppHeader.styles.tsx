import styled from "styled-components/native";

const AppHeader = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
`;

const Bambino = styled.Text`
  color: white;
  font-size: 40;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  align-self: center;
`;

const HomeButton = styled.Pressable`
  justify-content: center;
  background-color: ${(props) => props.theme.COLOUR_BACKGROUND_DARK};
  padding: 10px;
  margin-right: 20px;
  align-self: flex-end;
  border-radius: 24px;
`;

const Padder = styled.View`
  width: 64px;
`;

const s = {
  AppHeader,
  Bambino,
  HomeButton,
  Padder,
};

export default s;
