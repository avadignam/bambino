import styled from "styled-components/native";

const ListElementContainer = styled.View`
  background-color: ${(props) => props.theme.COLOUR_BACKGROUND_DARK};
  display: flex;
  flex-direction: row;
  margin: 10px;
  padding: 10px;
`;

const ItemContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  justify-content: space-between;
  width: 88%;
`;

const Item = styled.Text`
  font-size: 20px;
  font-style: italic;
  color: white;
`;

const DeleteButton = styled.Pressable``;

const s = {
  ListElementContainer,
  ItemContent,
  Item,
  DeleteButton,
};

export default s;
