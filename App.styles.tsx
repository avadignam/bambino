import styled from "styled-components/native";

const AppContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.COLOUR_BACKGROUND_LIGHT};
`;

const s = {
  AppContainer,
};

export default s;
