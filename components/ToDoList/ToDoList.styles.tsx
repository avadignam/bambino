import styled from "styled-components/native";

const List = styled.ScrollView`
  margin: 10px;
`;

const ListElementContainer = styled.View`
  background-color: ${(props) => props.theme.COLOUR_BACKGROUND_DARK};
  display: flex;
  flex-direction: row;
  margin: 10px;
  padding: 10px;
`;

const Item = styled.Text`
  font-size: 20px;
  font-style: italic;
  color: ${(props) => props.theme.COLOUR_MAIN_FONT};
`;

const ItemContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  justify-content: space-between;
  width: 88%;
`;

const DeleteButton = styled.Pressable`
  /* display: flex; */
  /* justify-self: ; */
`;

const TaskInput = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.4);
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  font-style: italic;
  color: ${(props) => props.theme.COLOUR_BACKGROUND_DARK};
`;

const Body = styled.View`
  background-color: ${(props) => props.theme.COLOUR_BACKGROUND_LIGHT};
  flex: 1;
`;

const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 10px;
`;

const StyledButton = styled.Pressable`
  background-color: ${(props) => props.theme.COLOUR_BACKGROUND_DARK};
  align-items: center;
  /* min-width: 100px; */
  padding: 10px;
  align-self: center;
  border-radius: 24px;
`;

const ButtonText = styled.Text`
  text-transform: uppercase;
  color: ${(props) => props.theme.COLOUR_MAIN_FONT};
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.3px;
`;

const ScreenTitle = styled.Text`
  color: ${(props) => props.theme.COLOUR_MAIN_FONT};
  font-style: italic;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 5px;
`;

const s = {
  List,
  Item,
  ItemContent,
  Body,
  TaskInput,
  ListElementContainer,
  ButtonsContainer,
  StyledButton,
  ButtonText,
  DeleteButton,
  ScreenTitle,
};

export default s;
