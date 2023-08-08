import styled from "styled-components/native";

const HomeScreenContainer = styled.ScrollView`
  background-color: ${(props) => props.theme.COLOUR_BACKGROUND_LIGHT};
  flex: 1;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

const Icon = styled.Pressable`
  flex: 2;
  aspect-ratio: 1.5;
  align-items: center;
  margin: 4%;
  justify-content: center;
  border: 3px solid ${(props) => props.theme.COLOUR_BACKGROUND_DARK};
  background-color: ${(props) => props.theme.COLOUR_BACKGROUND_MEDIUM};
  box-shadow: 3px 3px 2px gray;
`;

const Skeleton = styled.Image`
  width: 100px;
  height: 150px;
  align-self: center;
  margin-top: 10px;
`;

const IconName = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
  font-style: italic;
  margin-top: 5px;
`;

const s = {
  HomeScreenContainer,
  Icon,
  IconName,
  Skeleton,
};

export default s;
